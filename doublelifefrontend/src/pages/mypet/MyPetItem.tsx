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
	id: number;
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
	const { doDate } = useParams()
	
	useEffect(() => {
		axios.get(`/mytodo/${doDate}`)
			.then((res) => {
				setTodoData(res.data)
			})
			.catch((error) => {
				console.log('불러오기 실패', error)
			});
	}, [doDate]);

	return (
		<Ul>
			{items.map((item, index) => (
				<Li key={index}>
					{item.text}
					<button onClick={() => onDeleteItem(item.id)}><RiDeleteBinLine /></button>
				</Li>
			))}
		</Ul>		
	)
}

export default MyPetItem