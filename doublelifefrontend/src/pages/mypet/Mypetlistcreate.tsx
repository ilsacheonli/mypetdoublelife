import React, { useState } from 'react';
import styled from 'styled-components';

const InsertFormPositioner = styled.div`
  width: 600px;
	display: flex;
	flex-direction: column;
	margin-top: 15px;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
	border: none;
	border-bottom: 1px solid #063160;
	display: flex;
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

interface EventInputProps {
	onAddEvent: (event: Event) => void;
}
interface Event {
  title: string;
}
interface MypetlistcreateProps extends EventInputProps {
	setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

function Mypetlistcreate({ onAddEvent, setInputValue }: MypetlistcreateProps) {
	const [title, setTitle] = useState('');

	const handlerAddEvent = () => {
		if (title) {
			const event : Event = {
				title,
			};
			onAddEvent(event);
			setTitle('');
			setInputValue('');
		}
	}

  return (
    <>
      {(
        <InsertFormPositioner>
          <InsertForm>
            <Input 
						type="text"
						value={title}
						placeholder="오늘 한 일을 기록해주세요."
						autoFocus
						onChange={(e) => setTitle(e.target.value)}
					/>
					<button onClick={handlerAddEvent}>Add Event</button>
          </InsertForm>
        </InsertFormPositioner>
      )}
    </>
  );
}

export default Mypetlistcreate;