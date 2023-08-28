import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import Mypetlistitem from './Mypetlistitem';

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
  text: string;
}

interface MypetlistcreateProps extends EventInputProps {
	setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

interface InputProps {
	onInputChange: (value:string) => void;
}

function Mypetlistcreate(props: InputProps) {
	const [text, setText] = useState<string>('');
  const [events, setEvents] = useState<Event[]>([]);
	const [inputValue, setInputValue] = useState('');

	const handleInutChange = (event: ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.value;
		setInputValue(newValue);
		props.onInputChange(newValue);
	};

	const onChange = (e:any) => {
		console.log(e.target.value);
		setText(e.target.value);
	}

	const handlerAddEvent = () => {
		if (text) {
			const event : Event = {
				text,
			};
			setEvents([...events, event]);
			setText('');
		}
	}

  return (
    <>
      <InsertFormPositioner>
        <InsertForm>
          <Input
            type="text"
            value={inputValue}
            placeholder="오늘 한 일을 기록해주세요."
            autoFocus
            onChange={handleInutChange}
          />
          <button onClick={handlerAddEvent}>Add Event</button>
        </InsertForm>
      </InsertFormPositioner>
    </>
  );
}

export default Mypetlistcreate;