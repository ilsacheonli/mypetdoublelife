import React from 'react';
import {Commentbox, Li, Ul} from './mypet.style';
import {RiDeleteBinLine} from "react-icons/ri";
import axios from "axios";

interface Comment {
    memId: string;
    reNo: number;
    myFeedNo: number;
    reContent: string;
}

interface CommentListProps {
    comments: Comment[];
    editComment: () =>void;
}

function MyPetCommentBox({ comments, editComment }: CommentListProps) {

    const onDeleteItem = (reNo: number) =>{
        axios.get('/reply/delete/'+reNo)
            .then(()=>{
                console.log('삭제 성공');
            }).catch((error) => {
                console.log('삭제 실패', error);
        })

        editComment();
    }

  return (
    <Commentbox>
      <Ul>
        {comments.map((comment) => (
          <Li key={comment.reNo}>
              <div className='idDiv'>{comment.memId}</div>
              <div className='textDiv'>{comment.reContent}</div>
              <button onClick={() => onDeleteItem(comment.reNo)}><RiDeleteBinLine /></button>
          </Li>
        ))}
      </Ul>
    </Commentbox>
  );
}

export default MyPetCommentBox;
