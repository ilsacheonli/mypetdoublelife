import React from 'react';
import {Commentbox, Li, Ul} from './mypet.style';
import {RiDeleteBinLine} from "react-icons/ri";
import axios from "axios";

interface Comment {
    memId: string;
    reNo: number;
    myFeedNo: number;
    reContent: string;
    regDate: string;
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
      <ul>
        {comments.map((comment) => (
          <li key={comment.reNo}>
              <div className='idDiv'>{comment.memId} {comment.regDate}</div>
              <div className='textDiv'>{comment.reContent}</div>

              {sessionStorage.getItem('id') === comment.memId ? (
                  <button onClick={() => onDeleteItem(comment.reNo)}><RiDeleteBinLine /></button>
              ):(
                  <></>
              )}

          </li>
        ))}
      </ul>
    </Commentbox>
  );
}

export default MyPetCommentBox;
