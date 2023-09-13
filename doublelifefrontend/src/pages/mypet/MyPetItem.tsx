import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Li, Ul } from './mypet.style'
import { RiDeleteBinLine } from 'react-icons/ri';


interface item {
	doNo: number;
	doContent: string;
	doDate: string;
}

interface itemProps {
	item : item;
  	onDeleteItem : (doNo: number) => void;
}

function MyPetItem( {item , onDeleteItem} : itemProps) {



	return (
		<Ul>
				<Li>
					{item.doContent}
					<button onClick={() => onDeleteItem(item.doNo)}><RiDeleteBinLine /></button>
				</Li>
		</Ul>		
	)
}

export default MyPetItem