import React, { useState } from 'react';
import { InsertForm, Input, Commentbutton } from './petstival.style';
import { RiAddLine } from 'react-icons/ri';
import axios from "axios";

interface CommentInputProps {
    feed_no: number
    editComment: () => void;
}

function CommentInput({ feed_no, editComment }: CommentInputProps) {
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
      frm.append("petstivalNo",feed_no.toString());
      frm.append("reContent",commentText);

      axios
          .post(`/feedview/reply/insert`, frm)
          .then((res) => {
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
