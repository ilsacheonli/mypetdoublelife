import React, { useState } from "react";
import { Board, BoardList, SearchBar } from "./petmunity.style";
import SearchForm from "./SearchForm";
import Dropdown from "./Dropdown";

function PetmunityQna() {
  const onSubmit = (form: { name: string; }) => {
    console.log(form);
  };

  return (
    <div style={{display: "inline-block", width: "100%"}}>
      <SearchBar>
          <Dropdown />
          <SearchForm onSubmit={onSubmit}/>
      </SearchBar>
      <Board>
        <BoardList>
          <h4>Total 4</h4>
          <table>
            <colgroup>
              <col width="15%"/>
              <col width="40%"/>
              <col width="15%"/>
              <col width="15%"/>
              <col width="15%"/>
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
                <td>공지사항입니다.2222222222222222222222222</td>
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
    </div>
  );
}

export default PetmunityQna;
