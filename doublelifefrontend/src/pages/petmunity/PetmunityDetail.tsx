import React, { useEffect, useState } from "react";
import {
  ArticleBottomBtns,
  ArticleContentBox,
  ArticleTitle,
  Buttonbox,
  CommentBox,
  FloatLeft,
  ListButton,
  Viewcontainer,
  WriterInfo,
} from "./petmunitydetail.style";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import dayjs from "dayjs";
import { BoardListInterface } from "./BoardListInterface";

function PetmunityDetail() {
  // hook
  const params = useParams().id;
  const navigate = useNavigate();

  // state
  const [detailBoardData, setDetailBoardData] = useState<BoardListInterface>();

  useEffect(() => {
    axios
      .get(`/board/view/${params}`)
      .then((response) => {
        setDetailBoardData(response.data);
      })

      .catch(function (error) {
        console.log(error);
      });
  }, []);

  if (typeof detailBoardData === "undefined") return <></>;

  const formModify = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    navigate(`/board/modify/${detailBoardData.id}`);
  };

  const formDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (window.confirm("게시글을 삭제하시겠습니까?")) {
      axios
        .get(`http://localhost:8080/board/delete/${params}`, {})
        .then(function (response) {
          alert("게시글이 삭제되었습니다.");
          navigate("/petmunity/qna");
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      return false;
    }
  };

  const formList = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    navigate("/petmunity/qna");
  };

  if (typeof detailBoardData === "undefined") return <></>;

  return (
    <>
      <Viewcontainer>
        <ArticleContentBox>
          <div className="article_header">
            <ArticleTitle>
              <div className="title_area">
                <div className="title_text">
                  <h3 style={{ fontSize: "26px" }}>{detailBoardData.title}</h3>
                </div>
              </div>
            </ArticleTitle>
            <WriterInfo>
              <div className="profile_info">
                <div className="nick_box">작성자: {detailBoardData.writer}</div>
              </div>
              <div className="article_info">
                <span>No.{detailBoardData.id} | </span>
                <span className="date">
                  {dayjs(detailBoardData.regDate).format("YYYY.MM.DD")}
                </span>
              </div>
            </WriterInfo>
          </div>
          <div className="article_container">
            <div className="board-content">
              <h5>{detailBoardData.content}</h5>
            </div>
          </div>
        </ArticleContentBox>
      </Viewcontainer>
      <Viewcontainer style={{marginTop:"20px"}}>
        <ArticleContentBox>
          <CommentBox>
            <h4>댓글</h4>
            <ul className="comment_list" style={{listStyle:"none"}}>
              <li className="CommentItem">
                <div className="comment_area">
                  <div className="comment_box">
                    <div className="comment_nick_box">
                      <span className="comment_nick_info" style={{fontWeight:"bold"}}>user2 </span>
                      <span className="comment_info_date" style={{color:"#7f7f7f"}}>
                        2023.08.23 14:00
                        </span>
                    </div>
                    <div className="comment_text_box">
                      <div className="comment_text_view">
                        <span className="text_comment">댓글 내용 1</span>
                        
                      </div>
                    </div>
                    <div className="comment_info_box">
                      
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </CommentBox>
        </ArticleContentBox>
      </Viewcontainer>
      <FloatLeft>
        <Buttonbox>
          <button onClick={formModify}>수정</button>
          <button onClick={formDelete}>삭제</button>
          <button onClick={formList}>목록</button>
        </Buttonbox>
      </FloatLeft>
    </>
  );
}

export default PetmunityDetail;
