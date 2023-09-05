import React from 'react'
import { Li, Ul } from './mypet.style'
import { RiDeleteBinLine } from 'react-icons/ri';
import styled from 'styled-components';

interface Item {
  id: number;
  text: string;
}

interface ItemListProps {
  items: Item[];
  onDeleteItem: (id: number) => void;
}

function MyPetItem({ items, onDeleteItem }: ItemListProps) {
	console.log(items)
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