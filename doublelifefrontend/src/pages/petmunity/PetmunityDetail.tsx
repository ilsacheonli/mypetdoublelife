import React, { useEffect, useState } from "react";
import {
  ArticleContentBox,
  ArticleTitle,
  Buttonbox,
  CommentBox,
  FloatLeft,
  Viewcontainer,
  WriterInfo,
} from "./petmunitydetail.style";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import dayjs from "dayjs";
import { BoardListInterface } from "./BoardListInterface";
import PetmunityComment from "./PetmunityComment";
import PetmunityCommentInput from "./PetmunityCommentInput";

interface Item {
  text: string;
}

function PetmunityDetail() {
  // hook
  const params = useParams().id;
  const navigate = useNavigate();

  // state
  const [detailBoardData, setDetailBoardData] = useState<BoardListInterface>();
  const [inputValue, setInputValue] = useState<string>("");
  const [items, setItems] = useState<Item[]>([]);

  // 게시판 정보(제목, 작성자, 내용) 가져오기
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

  // type undefined 에러 방지를 위한 코드
  if (typeof detailBoardData === "undefined") return <></>;

  // 수정 버튼을 누르면 해당 수정 페이지로 이동
  const formModify = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    navigate(`/board/modify/${detailBoardData.id}`);
  };

  // 서버를 통해 삭제가 완료되면 qna 페이지로 이동
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

  // 목록 버튼을 누르면 qna 페이지로 이동
  const formList = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    navigate("/petmunity/qna");
  };

  // 댓글 입력
  const handleAddItem = () => {
    const newItem: Item = {
      text: inputValue,
    };
    setItems((prevItems) => [...prevItems, newItem]);
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
      <Viewcontainer style={{ marginTop: "20px" }}>
        <ArticleContentBox>
          <CommentBox>
            <h4>댓글</h4>
            <ul className="comment_list" style={{ listStyle: "none" }}>
              <li className="CommentItem">
                <div className="comment_area">
                  <div className="comment_box" style={{ marginBottom: "5px" }}>
                    <div className="comment_nick_box">
                      <span
                        className="comment_nick_info"
                        style={{ fontWeight: "bold" }}
                      >
                        user2{" "}
                      </span>
                      <span
                        className="comment_info_date"
                        style={{ color: "#7f7f7f" }}
                      >
                        2023.08.23 14:00
                      </span>
                    </div>
                    <div className="comment_text_box">
                      <div className="comment_text_view">
                        <span className="text_comment">댓글 내용 1</span>
                      </div>
                    </div>
                  </div>
                  <div className="comment_box" style={{ marginBottom: "5px" }}>
                    <div className="comment_nick_box">
                      <span
                        className="comment_nick_info"
                        style={{ fontWeight: "bold" }}
                      >
                        user2{" "}
                      </span>
                      <span
                        className="comment_info_date"
                        style={{ color: "#7f7f7f" }}
                      >
                        2023.08.23 14:00
                      </span>
                    </div>
                    <div className="comment_text_box">
                      <div className="comment_text_view">
                        <span className="text_comment">댓글 내용 1</span>
                      </div>
                    </div>
                  </div>
                  <div className="comment_box" style={{ marginBottom: "5px" }}>
                    <div className="comment_nick_box">
                      <span
                        className="comment_nick_info"
                        style={{ fontWeight: "bold" }}
                      >
                        user2{" "}
                      </span>
                      <span
                        className="comment_info_date"
                        style={{ color: "#7f7f7f" }}
                      >
                        2023.08.23 14:00
                      </span>
                    </div>
                    <div className="comment_text_box">
                      <div className="comment_text_view">
                        <span className="text_comment">댓글 내용 1</span>
                      </div>
                    </div>
                  </div>
                  <div className="comment_box" style={{ marginBottom: "5px" }}>
                    <div className="comment_nick_box">
                      <span
                        className="comment_nick_info"
                        style={{ fontWeight: "bold" }}
                      >
                        user2{" "}
                      </span>
                      <span
                        className="comment_info_date"
                        style={{ color: "#7f7f7f" }}
                      >
                        2023.08.23 14:00
                      </span>
                    </div>
                    <div className="comment_text_box">
                      <div className="comment_text_view">
                        <span className="text_comment">댓글 내용 1</span>
                      </div>
                    </div>
                  </div>
                  {/* 시연 중 필요할지도 모를 코드 */}
                  {/* <div className="comment_box" style={{marginBottom:"5px"}}>
                    <div className="comment_nick_box">
                      <span className="comment_nick_info" style={{fontWeight:"bold"}}>test </span>
                      <span className="comment_info_date" style={{color:"#7f7f7f"}}>
                        2023.9.15 14:00
                        </span>
                    </div>
                    <div className="comment_text_box">
                      <div className="comment_text_view">
                        <span className="text_comment">댓글 내용 1</span>
                      </div>
                    </div>
                  </div> */}
                  <PetmunityCommentInput items={items} />
                </div>
                <PetmunityComment
                  inputValue={inputValue}
                  onInputChange={setInputValue}
                  onAddItem={handleAddItem}
                />
              </li>
            </ul>
          </CommentBox>
        </ArticleContentBox>
      </Viewcontainer>
      {/* 작성자 정보와 일치하는 경우에만 수정, 삭제 버튼 나타나도록 조건 추가 */}
      <FloatLeft>
        {sessionStorage.getItem("id") === `${detailBoardData.writer}` ? (
          <Buttonbox>
            <button onClick={formList}>목록</button>
            <button onClick={formModify}>수정</button>
            <button onClick={formDelete}>삭제</button>
          </Buttonbox>
        ) : (
          <Buttonbox>
            <button onClick={formList}>목록</button>
          </Buttonbox>
        )}
      </FloatLeft>
    </>
  );
}

export default PetmunityDetail;
