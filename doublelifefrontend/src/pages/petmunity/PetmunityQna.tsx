import React, { useEffect, useState } from "react";
import { Board, BoardList, FloatRight, SearchBar } from "./petmunity.style";
import Dropdown from "./Dropdown";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { BoardListInterface } from "./BoardListInterface";
import dayjs from "dayjs";

function PetmunityQna() {
  const [boardList, setBoardList] = useState<BoardListInterface[]>([]);

  const boardLength = boardList.length;

  useEffect(() => {
    // axios.get('/petmunity/qna')
    //   .then((response) => {
    //     setBoardList([...response.data])
    //   })

    //   .catch(function(error) {
    //     console.log(error)
    //   })
    getBoardList();
  }, [])

  const getBoardList = async () => {
    // res는 http response의 header + body를 모두 갖고 있다.
    const res  = await axios.get('/petmunity/qna');
    console.log(res.data);
    setBoardList([...res.data]);
  }

  return (
    <div style={{ display: "inline-block", width: "100%" }}>
      <SearchBar>
        <Dropdown />
      </SearchBar>
      <Board>
        <BoardList>
          <h4>Total {boardLength}</h4>
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
            {boardList &&
              boardList.map((board, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td className="title"><Link to={`/board/view/${board.bno}`}>{board.title}</Link></td>
                  <td>{board.writer}</td>
                  <td>{dayjs(board.regDate).format('YYYY.MM.DD')}</td>
                  <td>{board.viewCnt}</td>
                </tr>
              )
            })
          }
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
