import axios from "axios";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BoardListInterface } from "./BoardListInterface";
import {
  Board,
  BoardList,
  BoardPagination,
  FloatRight,
} from "./petmunity.style";

function PetmunityWalkingMate() {
  const [boardList, setBoardList] = useState<BoardListInterface[]>([]); // axios에서 받아온 전체 게시글 데이터
  const [currentPost, setCurrentPost] =
    useState<BoardListInterface[]>(boardList); // 페이지네이션을 통해 보여줄 게시글
  const [page, setPage] = useState<number>(1); // 현재 페이지 번호

  const boardLength = boardList.length;
  const postPerPage = 10; // 페이지 당 게시글 개수
  const indexOfLastPost = page * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    axios
      .get("/petmunity/walkingmate")
      .then((response) => {
        setBoardList([...response.data].reverse());
      })

      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    setCurrentPost(boardList.slice(indexOfFirstPost, indexOfLastPost));
  }, [boardList, indexOfFirstPost, indexOfLastPost, page]);

  return (
    <div style={{ display: "inline-block", width: "100%" }}>
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
              {currentPost &&
                currentPost.map((board, index) => {
                  return (
                    <tr key={index}>
                      <td>{board.bno}</td>
                      <td className="title">
                        <Link to={`/board/view/${board.id}`}>
                          {board.title}
                        </Link>
                      </td>
                      <td>{board.writer}</td>
                      <td>{dayjs(board.regDate).format("YYYY.MM.DD")}</td>
                      <td>{board.viewCnt}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <BoardPagination>
            <Pagination
              activePage={page}
              itemsCountPerPage={postPerPage}
              totalItemsCount={boardList.length}
              pageRangeDisplayed={10}
              prevPageText={"<"}
              nextPageText={">"}
              onChange={handlePageChange}
            />
          </BoardPagination>
        </BoardList>
      </Board>

      <PostBtn>
        <FloatRight>
          <PostWrite>
            {sessionStorage.getItem("id") === null ? (
              <Link
                to={"/login"}
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                글쓰기
              </Link>
            ) : (
              <Link
                to={"/petmunity/writepage3"}
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                글쓰기
              </Link>
            )}
          </PostWrite>
        </FloatRight>
      </PostBtn>
    </div>
  );
}

export default PetmunityWalkingMate;

const PostBtn = styled.div`
  margin-top: 9px;
  text-align: right;
`;

const PostWrite = styled.button`
  width: 55px;
  height: 35px;
  background-color: #063160;
  border: none;
  color: #fff;
  border-radius: 5px;
`;
