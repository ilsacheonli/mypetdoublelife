import React, { useState } from "react";
import {
  Buttonbox,
  Contentdiv,
  Titlediv,
  Writecontainer,
  Writeform,
} from "./petmunitywrite.style";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const PetmunityWritePage = () => {
  // hook
  const navigate = useNavigate();
  const params = useParams().id;

  // state
  let [title, setTitle] = useState<string>("");
  let [content, setContent] = useState<string>("");

  const formSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (title.length === 0) {
      alert("제목을 입력해 주세요.");
    } else if (content.length === 0) {
      alert("내용을 입력해 주세요.");
    } else {
      if (window.confirm("게시글을 등록하시겠습니까?")) {
        axios
          .post("http://localhost:8080/petmunity/qna", {
            headers: { "Content-Type": "multipart/form-data" },
            category: "qna",
            title: title,
            writer: sessionStorage.getItem("id"),
            content: content,
          })
          .then(function (response) {
            alert("게시글이 등록되었습니다.");
            navigate("/petmunity/qna");
          })

          .catch(function (error) {
            console.log(error);
          });
      } else {
        return false;
      }
    }
  };

  const formCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (window.confirm("게시글 작성을 취소하시겠습니까?")) {
      navigate("/petmunity/qna");
    } else {
      return false;
    }
  };

  return (
    <>
      <Writecontainer>
        <Writeform encType="multipart/form-data">
          <Titlediv>
            <input
              placeholder="제목을 입력하세요."
              name="title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </Titlediv>

          <Titlediv>
            <div style={{ textAlign: "initial" }}>
              작성자: {sessionStorage.getItem("id")}
            </div>
          </Titlediv>

          <Contentdiv>
            <textarea
              placeholder="내용을 입력하세요."
              name="content"
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
          </Contentdiv>
          <Buttonbox>
            <button onClick={formSubmit}>게시</button>
            <button onClick={formCancel}>취소</button>
          </Buttonbox>
        </Writeform>
      </Writecontainer>
    </>
  );
};

export default PetmunityWritePage;
