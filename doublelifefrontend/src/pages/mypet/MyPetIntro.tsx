import React, { useEffect, useState } from 'react';
import { Intro, ProfileButton, Formbutton, Button, Default } from './mypet.style';
import { RiDeleteBinLine, RiPencilLine } from 'react-icons/ri';
import axios from 'axios';
import dayjs from "dayjs";


interface prop {
	petNo: number;
	petReload: () => void;
}

function MyPetIntro({ petNo, petReload }: prop) {
	const initialPetData = {
		petName: '',
		petGender: '',
		petBirth: '',
		petIntro: ''
	};

	const [petData, setPetData] = useState(initialPetData);
	const [editing, setEditing] = useState(false);

	const setDate = (petBirth: string) => {

		if (petBirth == null) {
			return '';
		}

		let date = new Date(petBirth);
		let formatDate = dayjs(date).format('YYYY-MM-DD');

		return formatDate;
	}

	useEffect(() => {
		axios
			.get('/mypet/' + petNo)
			.then((res) => {
				setPetData(res.data);
			})
			.catch(function (error) {
				console.log(error);
			})
	}, []);

	const handleInputChange = (e: any) => {

		const { name, value } = e.target;
		setPetData({
			...petData,
			[name]: value
		});
	};

	const handleEditButtonClick = () => {
		setEditing(true);
	};

	let frm = new FormData()
	frm.append('petNo', petNo.toString())
	frm.append('petName', petData.petName)
	frm.append('petGender', petData.petGender)
	frm.append('petBirth', setDate(petData.petBirth))
	frm.append('petIntro', petData.petIntro)

	const handleSaveButtonClick = (event: React.FormEvent) => {
		event.preventDefault();
		axios.post("/mypet/insert", frm)
			.then(res => {
				console.log('등록 성공', res.data);
				setEditing(false);
				alert('프로필이 등록되었습니다.');
				petReload();
			})
			.catch(error => {
				console.error('등록 실패', error)
				setEditing(false);
				alert('프로필 등록이 실패했습니다.');
				petReload();
			})
	};

	const handleDelete = () => {
		axios.get("/mypet/remove/" + petNo)
			.then(res => {
				console.log('삭제 성공', res);
				alert('프로필이 삭제되었습니다.');
				setPetData(initialPetData); // 프로필 데이터 초기화
				petReload();
			})
			.catch(error => {
				console.log('삭제 실패', error);
				alert('프로필 삭제가 실패했습니다.');
				petReload();
			})
	};



	return (
		<Intro>
			{editing ? (
				<form>
					<p>
						이름 : {''}
						<input type="text" name="petName" value={petData.petName} onChange={handleInputChange} />
					</p>
					<p>
						성별 : {''}
						<input type="text" name="petGender" value={petData.petGender} onChange={handleInputChange} />
					</p>
					<p>
						생일 : {''}
						<input type="date" name="petBirth" value={setDate(petData.petBirth)} onChange={handleInputChange} />
					</p>
					<p>
						자기소개 : {''}
						<textarea name="petIntro" value={petData.petIntro} onChange={handleInputChange} />
					</p>
					<Formbutton>
						<ProfileButton>
							<button onClick={handleSaveButtonClick}><RiPencilLine /></button>
							<button type="button" onClick={() => setEditing(false)}><RiDeleteBinLine /></button>
						</ProfileButton>
					</Formbutton>
				</form>
			) : (
				<Default>
					<p>이름 : {petData.petName}</p>
					<p>성별 : {petData.petGender}</p>
					<p>생일 : {petData.petBirth ? setDate(petData.petBirth) : ''}</p>
					<p>자기소개 : {petData.petIntro}</p>
					<Button>
						<ProfileButton>
							<button onClick={handleEditButtonClick}><RiPencilLine /></button>
							<button onClick={handleDelete}><RiDeleteBinLine /></button>
						</ProfileButton>
					</Button>
				</Default>
			)}
		</Intro>
	);
}

export default MyPetIntro;