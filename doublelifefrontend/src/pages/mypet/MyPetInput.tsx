import React, {useState} from 'react';
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
	onAddItem: () => void;
}

function MyPetInput({ inputValue, onInputChange, onAddItem }: InputFormProps) {
	const [keyCounter, setKeyCounter] = useState<number>(0);

  async function sendDataToServer() {
    try {
      const serverURL = '/mytodo/insert';

      // 서버로 보낼 데이터 객체 생성
      const dataToSend = {
        doContent: inputValue, // 서버에서 사용하는 필드 이름으로 변경
				doDate: 'YYYY-MM-DD'
      };

      // Axios를 사용하여 POST 요청 보내기
      await axios.post(serverURL, dataToSend, {
				headers: {
					'Content-Type': 'multipart/form-data',
				}
			});

      console.log('데이터가 성공적으로 서버로 전송되었습니다.');
    } catch (error) {
      console.error('데이터 전송 중 오류 발생:', error);
    }
  }
	

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (inputValue.trim()) {

      sendDataToServer();
			
      onInputChange('');
      setKeyCounter((prevKey) => prevKey + 1);

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
						<Button onClick={onAddItem} key={keyCounter}><RiAddLine /></Button>
					</InsertForm>
				</InsertFormPositioner>
			)}
		</>
	);
}

export default MyPetInput;