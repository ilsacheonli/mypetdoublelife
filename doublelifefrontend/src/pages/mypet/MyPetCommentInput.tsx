import React, { useState } from 'react';
import { InsertForm, Input, Commentbutton } from './mypet.style';
import { RiAddLine } from 'react-icons/ri';

interface CommentInputProps {
  onSubmit: (text: string) => void;
}

function CommentInput({ onSubmit }: CommentInputProps) {
  const [commentText, setCommentText] = useState('');

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommentText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); 

    if (commentText.trim() === '') {
      return;
    }

    onSubmit(commentText);
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
