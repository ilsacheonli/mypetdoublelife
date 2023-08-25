import React, { useState } from "react";
import { Board, BoardList, FloatRight, SearchBar } from "./petmunity.style";
import Dropdown from "./Dropdown";
import styled from "styled-components";
import { Link } from "react-router-dom";

function PetmunityQna() {
  return (
    <div style={{ display: "inline-block", width: "100%" }}>
      <SearchBar>
        <Dropdown />
      </SearchBar>
      <Board>
        <BoardList>
          <h4>Total 4</h4>
          <table>
            <colgroup>
              <col width="15%" />
              <col width="40%" />
              <col width="15%" />
              <col width="15%" />
              <col width="15%" />
            </colgroup>

            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>등록일</th>
                <th>조회수</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <Link
                  to={`/petmunity/detail`}
                  style={{
                    textDecoration: "none",
                    color: "#202020",
                  }}
                >
                  <td>공지사항입니다.2222222222222222222222222</td>
                </Link>
                <td>user1</td>
                <td>2023.08.22</td>
                <td>123</td>
              </tr>
              <tr>
                <td>2</td>
                <td>test222222223429040240</td>
                <td>user2</td>
                <td>2023.08.22</td>
                <td>456</td>
              </tr>
            </tbody>
          </table>
        </BoardList>
      </Board>
      <PostBtn>
        <FloatRight>
          <PostWrite>
            <Link
              to={"/petmunity/writepage"}
              style={{
                textDecoration: "none",
                color: "#0a0a0a",
              }}
            >
              글쓰기
            </Link>
          </PostWrite>
        </FloatRight>
      </PostBtn>
    </div>
  );
}

export default PetmunityQna;

const PostBtn = styled.div`
  margin-top: 9px;
  text-align: right;
`;

const PostWrite = styled.button`
  width: 74px;
  padding: 9px 0;
  display: inline-block;
  height: 36px;
  box-sizing: border-box;
  border: 1px solid #d3d3d3;
  text-align: center;
  vertical-align: top;
  background-color: white;
`;
