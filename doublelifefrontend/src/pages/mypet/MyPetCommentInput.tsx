import React, { useState } from 'react';
import { InsertForm, Input, Commentbutton } from './mypet.style';
import { RiAddLine } from 'react-icons/ri';
import axios from "axios";

interface CommentInputProps {
    feedNo: number
    editComment: () => void;
}

function CommentInput({ feedNo, editComment }: CommentInputProps) {
  const [commentText, setCommentText] = useState('');

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommentText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); 

    if (commentText.trim() === '') {
      return;
    }

    let frm = new FormData();
    frm.append("myFeedNo",feedNo.toString());
    frm.append("reContent",commentText);

    axios
        .post(`/myfeed/reply/insert/`, frm)
        .then((res) => {
            editComment();
            console.log("댓글 추가 성공")
        })
        .catch((error) => {
            console.log("댓글 추가 실패", error)
        });

    editComment();
    setCommentText('');
  };

  return (
      <InsertForm onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="댓글 입력"
          value={commentText}
          onChange={handleCommentChange}
        />
        <Commentbutton type="submit"><RiAddLine /></Commentbutton>
      </InsertForm>
  );
}

export default CommentInput;
