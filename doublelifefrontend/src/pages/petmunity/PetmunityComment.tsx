import React, {useState} from 'react';
import styled from 'styled-components';
import { RiAddLine } from 'react-icons/ri';

const InsertFormPositioner = styled.div`
  width: 100%;
	display: flex;
	flex-direction: column;
	margin-top: 15px;
`;

const InsertForm = styled.form`
  background: #fff;
	border: none;
	border-bottom: 2px solid #063160;
	display: flex;
	margin-left: 5px;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: none;
  width: 90%;
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

function PetmunityComment({ inputValue, onInputChange, onAddItem }: InputFormProps) {
	const [keyCounter, setKeyCounter] = useState<number>(0);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (inputValue.trim()) {			
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
							placeholder="댓글 입력"
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

export default PetmunityComment;