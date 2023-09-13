import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';
import { Li, Ul } from './mypet.style'
import { RiDeleteBinLine } from 'react-icons/ri';

interface Item {
  id: number;
  text: string;
}

interface todoItem {
	doNo: number;
	memId: string;
	doContent: string;
	doDate: string;
}

interface ItemListProps {
  items: Item[];
  onDeleteItem: (id: number) => void;
}

function MyPetItem({ items, onDeleteItem }: ItemListProps) {
	const [todoData, setTodoData] = useState<todoItem[]>([]);
	
	useEffect(() => {
		axios.get('/mytodo')
			.then((res) => {
				setTodoData(res.data.reverse())
				console.log('불러오기 성공', res.data)
			})
			.catch((error) => {
				console.log('불러오기 실패', error)
			});
	}, []);

	return (
		<Ul>
			{todoData.map((item, index) => (
				<Li key={index}>
					{item.doContent}
					<button onClick={() => onDeleteItem(item.doNo)}><RiDeleteBinLine /></button>
				</Li>
			))}
		</Ul>		
	)
}

export default MyPetItem