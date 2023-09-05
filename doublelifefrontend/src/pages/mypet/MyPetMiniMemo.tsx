import React, { useState } from 'react';
import styled from 'styled-components';

const MemoContent = styled.p`
  width: 630px;
	height: 210px;
	white-space: pre-line;
	font-size: 1.3rem;
	border: 1px solid blue;
`;

const StyledTextarea = styled.textarea` /*두줄정도써야이쁘게나옴*/
  width: 630px;
	height: 210px;
  font-size: 1.3rem;
  resize: none;
  color: black;
  border: none;
  outline: none;
	border: 1px solid red;

`;

const Button = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 0.5rem;
	position: absolute;
	bottom: 10px;
	right: 20px;
`;

function MyPetMiniMemo() {
	const [memo, setMemo] = useState<string>('');
	const [isEditing, setIsEditing] = useState<boolean>(false);

	function handleAddMemo() {
		if (memo.trim() !== '') {
			setIsEditing(false);
		}
	}

	return (
		<>
			{isEditing ? (
				<>
					<StyledTextarea
						value={memo}
						onChange={(e) => setMemo(e.target.value)}
						placeholder="메모를 작성하세요."
						rows={4}
					/>
					<Button onClick={handleAddMemo}>저장</Button>
				</>
			) : (
				<>
					<MemoContent>{memo}</MemoContent>
					<Button onClick={() => setIsEditing(true)}>수정</Button>
				</>
			)}
		</>
	);
}

export default MyPetMiniMemo;
