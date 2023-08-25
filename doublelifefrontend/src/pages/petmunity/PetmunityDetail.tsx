import React from "react";
import {
  ArticleBottomBtns,
  ArticleContentBox,
  ArticleTitle,
  CommentBox,
  ListButton,
  WriterInfo,
} from "./petmunitydetail.style";
import { Link } from "react-router-dom";
import { FloatRight } from "./petmunity.style";

function PetmunityDetail() {
  return (
    <>
      <ArticleContentBox>
        <div className="article_header">
          <ArticleTitle>
            <div className="title_area">
              <div className="title_text">
                <h3 style={{ fontSize: "26px" }}>게시글 제목</h3>
              </div>
            </div>
          </ArticleTitle>
          <WriterInfo>
            <div className="profile_info">
              <div className="nick_box">user1</div>
            </div>
            <div className="article_info">
              <span className="date">2023.08.23</span>
            </div>
          </WriterInfo>
        </div>
        <div className="article_container">
          <h5>글 내용</h5>
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
