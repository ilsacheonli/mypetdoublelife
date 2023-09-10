import React, { useEffect, useState } from "react";
import {
  ArticleBottomBtns,
  ArticleContentBox,
  ArticleTitle,
  CommentBox,
  ListButton,
  WriterInfo,
} from "./petmunitydetail.style";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FloatRight } from "./petmunity.style";
import axios from "axios";
import dayjs from "dayjs";
import { BoardListInterface } from "./BoardListInterface";

function PetmunityDetail() {
  // hook
  const params = useParams().id
  const navigate = useNavigate()

  // state
  const [detailBoardData, setDetailBoardData] = useState<BoardListInterface>();

  useEffect(() => {
    axios.get(`/board/view/${params}`)
      .then((response) => {
        setDetailBoardData(response.data)
      })

      .catch(function(error) {
        console.log( error)
      })
  }, [])

  const formDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e. preventDefault();

    if (window.confirm('게시글을 삭제하시겠습니까?')) {
      axios.get(`http://localhost:8080/petmunity/qna/delete/${params}`, {
      })
      .then(function(response) {
        alert('게시글이 삭제되었습니다.');
        navigate('/petmunity/qna');
      })
      .catch(function(error) {
        console.log(error);
      })
    } else {
      return false;
    }
  }

  if (typeof detailBoardData === 'undefined') return <></>;

  return (
    <>
    
      <ArticleContentBox>
        <div className="article_header">
          <ArticleTitle>
            <div className="title_area">
              <div className="title_text">
                <h3 style={{ fontSize: "26px" }}>게시글 제목: {detailBoardData.title}</h3>
                <p>No.{detailBoardData.id}</p>
                <p>{dayjs(detailBoardData.regDate).format('YYYY.MM.DD')}</p>
              </div>
            </div>
          </ArticleTitle>
          <WriterInfo>
            <div className="profile_info">
              <div className="nick_box">작성자: {detailBoardData.writer}</div>
            </div>
            <div className="article_info">
              <span className="date">{dayjs(detailBoardData.regDate).format('YYYY.MM.DD')}</span>
            </div>
          </WriterInfo>
        </div>
        <div className="article_container">
        <div className="board-content">
          <p>{detailBoardData.content}</p>
        </div>
          <h5>글 내용:{detailBoardData.content}</h5>
        </div>
        <hr />
        <CommentBox>
          <h4>댓글</h4>
        <ul className="comment_list">
          <li className="CommentItem">
            <div className="comment_area">
              <div className="comment_box">
                <div className="comment_nick_box">
                  <div className="comment_nick_info">user2</div>
                </div>
                <div className="comment_text_box">
                  <div className="comment_text_view">
                    <span className="text_comment">댓글 내용 1</span>
                  </div>
                </div>
                <div className="comment_info_box">
                  <span className="comment_info_date">2023.08.23 14:00</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </CommentBox>
      </ArticleContentBox>
      <FloatRight>
        <ArticleBottomBtns>
          <ListButton children="Delete" onClick={formDelete} />
          <ListButton>
            <Link
              to={"/petmunity/qna"}
              style={{
                textDecoration: "none",
                color: "#202020",
              }}
            >
              목록
            </Link>
          </ListButton>
        </ArticleBottomBtns>
      </FloatRight>
    </>
  );
}

export default PetmunityDetail;
