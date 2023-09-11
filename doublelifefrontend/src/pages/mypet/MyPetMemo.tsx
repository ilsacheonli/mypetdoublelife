import React, { useState } from 'react';
import MyPetInput from './MyPetInput';
import MyPetItem from './MyPetItem';

import { Mypetrecordbox, Mypetrecordmemo, Mypetrecordmemo1 } from './mypet.style'
import MyPetCalendar from './MyPetCalendar';

interface Item {
	id: number;
	text: string;
}

function MyPetMemo() {
	const [selectedDateId, setSelectedDateId] = useState<number | null>(null);
	const [items, setItems] = useState<Item[]>([]);
	const [inputValue, setInputValue] = useState<string>('');

	const handleAddItem = () => {
		if (selectedDateId !== null) {
			const newItem: Item = {
				id: selectedDateId,
				text: inputValue,
			};
			setItems(prevItems => [...prevItems, newItem]);
		}
	};

	const handleDeleteItem = (id: number) => {
		const updatedItems = items.filter(item => item.id !== id);
		setItems(updatedItems);
	};


	const handleDateClick = (date: Date, id: number) => {
		setSelectedDateId(id); // 선택한 날짜의 ID를 저장
		console.log(id)
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
						{selectedDateId !== null && (
							<MyPetItem
								items={items.filter(item => item.id === selectedDateId)}
								onDeleteItem={handleDeleteItem}
							/>
						)}
					</Mypetrecordmemo1>
				</Mypetrecordmemo>
			</Mypetrecordbox>
		</div>
	)
}

export default MyPetMemo