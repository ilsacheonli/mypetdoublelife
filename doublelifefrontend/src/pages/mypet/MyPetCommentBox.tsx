import React from 'react';
import { Commentbox } from './mypet.style';

interface Comment {
  id: number;
  text: string;
}

interface CommentListProps {
  comments: Comment[];
}

function MyPetCommentBox({ comments }: CommentListProps) {
  return (
    <Commentbox>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <div className='idDiv'>{comment.id}</div>
            <div className='textDiv'>{comment.text}</div>
          </li>
        ))}
      </ul>
    </Commentbox>
  );
}

export default MyPetCommentBox;
