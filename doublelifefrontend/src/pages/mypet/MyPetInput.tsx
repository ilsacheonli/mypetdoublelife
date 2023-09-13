import React from 'react'
import styled from 'styled-components';
import { RiAddLine } from 'react-icons/ri';
import axios from 'axios';

const InsertFormPositioner = styled.div`
  width: 600px;
	display: flex;
	flex-direction: column;
	margin-top: 15px;
`;

const InsertForm = styled.form`
  background: #fff;
	border: none;
	border-bottom: 2px solid #063160;
	display: flex;
	margin-left: 50px;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: none;
  width: 600px;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

const Button = styled.button`
	border: none;
	background-color: #fff;
	svg {
		width: 40px;
		height: 40px;
		color: #063160;
	}
`;

interface InputFormProps {
	inputValue: string;
	onInputChange: (value: string) => void;
	inputDate: string;
}

function MyPetInput({ inputValue, onInputChange,inputDate }: InputFormProps) {

	function sendDataToServer() {
		const apiUrl = '/mytodo/insert';
		const sendData = {
			doContent: inputValue,
			doDate: inputDate,
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

	}


	function handleSubmit() {

		if (inputValue.trim()) {

			sendDataToServer();
			onInputChange('');



		}
	}

	return (
		<>
			{(
				<InsertFormPositioner>
					<InsertForm onSubmit={handleSubmit}>
						<Input
							type={"text"}
							value={inputValue}
							placeholder="오늘 있었던 일을 기록해주세요."
							onChange={(e) => onInputChange(e.target.value)}
							autoFocus
						/>
						<Button type={"submit"}><RiAddLine /></Button>
					</InsertForm>
				</InsertFormPositioner>
			)}
		</>
	);
}

export default MyPetInput;