import React, { useState, useEffect } from 'react'
import axios from 'axios';
import MyPetInput from './MyPetInput';
import MyPetItem from './MyPetItem';
import dayjs from "dayjs";

import { Mypetrecordbox, Mypetrecordmemo, Mypetrecordmemo1 } from './mypet.style'
import MyPetCalendar from './Mypetcalendar';

interface Item {
	doNo: number;
	doContent: string;
	doDate: string;

}

function MyPetMemo() {
	const [selectedDateId, setSelectedDateId] = useState<number | null>(null);
	const [items, setItems] = useState<Item[]>([]);
	const [delDoNo , setDelDoNo] = useState<number>();
	const [inputValue, setInputValue] = useState<string>('');
	const [selectDate, setSelectDate] = useState<string>(dayjs(Date()).format('YYYY-MM-DD'));

	useEffect(() => {
		axios.get('/mytodo/'+selectDate)
			.then((res) => {
				setItems(res.data)
				console.log('불러오기 성공', res.data)
			})
			.catch((error) => {
				console.log('불러오기 실패', error)
			});
	}, [selectDate,delDoNo]);

	const handleAddItem = () => {
		const apiUrl = '/mytodo/insert';
		const sendData = {
			doContent: inputValue,
			doDate: selectDate,
		};
		axios.post(apiUrl, sendData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			}
		}).then(() =>{
			console.log('추가 성공');
		}).catch((error) => {
			console.error('추가 실패', error);
		})
	};

	const handleDeleteItem = (doNo : number) => {
		axios
			.get('/mytodo/delete/'+doNo)
			.then((res) => {
				setDelDoNo(doNo)
				console.log('삭제 성공', res.data)
			})
			.catch((error) => {
				console.log('삭제 실패', error)
			})

	};

	const handleDateClick = (date: string, id: number) => {
		setSelectDate(date);
		setSelectedDateId(id); // 선택한 날짜의 ID를 저장
		console.log(selectedDateId)
	};

	return (
		<div>
			<Mypetrecordbox>
				<MyPetCalendar onDateClick={handleDateClick} />
				<Mypetrecordmemo>
					<Mypetrecordmemo1>
						<MyPetInput
							inputValue={inputValue}
							onInputChange={setInputValue}
							onAddItem={handleAddItem}
						/>
						{items.map((item, index)=>(
							<MyPetItem key={index}
								item={item}
								onDeleteItem={handleDeleteItem}
							/>
							))
						}
					</Mypetrecordmemo1>
				</Mypetrecordmemo>
			</Mypetrecordbox>
		</div>
	)
}

export default MyPetMemo