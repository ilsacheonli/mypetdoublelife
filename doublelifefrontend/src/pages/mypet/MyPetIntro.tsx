import React, { useState } from 'react';
import { Intro, ProfileButton, Formbutton, Button, Default } from './mypet.style';
import { RiDeleteBinLine, RiPencilLine } from 'react-icons/ri';
import axios from 'axios';

function MyPetIntro() {
  const initialPetData = {
    name: '',
    gender: '',
    birthday: '',
    introduce: ''
  };

  const [petData, setPetData] = useState(initialPetData);
  const [editing, setEditing] = useState(false);

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setPetData({
      ...petData,
      [name]: value
    });
  };

	const handleEditButtonClick = () => {
    setEditing(true);
  };

  const handleSaveButtonClick = () => {
    setEditing(false);
		let frm = new FormData()
		frm.append('name', '이름')
		frm.append('gender', '성별')
		frm.append('birthday', '생일')
		frm.append('introduce', '소개')
		
		axios.post("/mypet", frm)
		.then(res => {
			console.log('등록 성공', res.data);
		})
		.catch(error => {
			console.error('등록 실패', error)
		})
	};

  const handleDelete = () => {
    setPetData(initialPetData); // 프로필 데이터 초기화
    alert('프로필이 삭제되었습니다.');
		axios.delete("/mypet")
		.then(res => {
			console.log('삭제 성공', res)
		})
		.catch(error => {
			console.log('삭제 실패', error)
		})
  };



  return (
    <Intro>
      {editing ? (
        <form>
          <p>
            이름 : {''}
            <input type="text" name="name" value={petData.name} onChange={handleInputChange}/>
          </p>
          <p>
            성별 : {''}
            <input type="text" name="gender" value={petData.gender} onChange={handleInputChange}/>
          </p>
          <p>
            생일 : {''}
            <input type="text" name="birthday" value={petData.birthday} onChange={handleInputChange}/>
          </p>
          <p>
            자기소개 : {''}
						<textarea name="introduce" value={petData.introduce} onChange={handleInputChange}/>
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
          <p>이름 : {petData.name}</p>
          <p>성별 : {petData.gender}</p>
          <p>생일 : {petData.birthday}</p>
          <p>자기소개 : {petData.introduce}</p>
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
