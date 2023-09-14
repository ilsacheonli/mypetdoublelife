import React, {useState} from 'react';
import styled from 'styled-components';
import { RiAddLine } from 'react-icons/ri';
import axios from "axios";

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
	bid: number;
	editComment: () => void;
}

function PetmunityComment({ bid, editComment}: InputFormProps) {
	const [commentText, setCommentText] = useState('');

	const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCommentText(event.target.value);
	};

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

	  if (commentText.trim() === '') {
		  return;
	  }

	  if (sessionStorage.getItem('loggedIn')!== "true"){
		  window.location.href = '/login';
		  alert("로그인 좀;;;");
	  }

	  let frm = new FormData();
	  frm.append("boardId",bid.toString());
	  frm.append("reContent",commentText);

	  axios
		  .post(`/board/reply/insert`, frm)
		  .then((res) => {
			  console.log("댓글 추가 성공")
		  })
		  .catch((error) => {
			  console.log("댓글 추가 실패", error)
		  });

	  editComment();
	  setCommentText('');
  }

	return (
		<>
			{(
				<InsertFormPositioner>
					<InsertForm onSubmit={handleSubmit}>
						<Input
							type={"text"}
							value={commentText}
							placeholder="댓글 입력"
							onChange={handleCommentChange}
							autoFocus
						/>
						<Button type="submit"><RiAddLine /></Button>
					</InsertForm>
				</InsertFormPositioner>
			)}
		</>
	);
}

export default PetmunityComment;