import React, { useEffect, useState } from "react";
import {
  Board,
  BoardList,
  BoardPagination,
  FloatRight,
} from "./petmunity.style";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { BoardListInterface } from "./BoardListInterface";
import dayjs from "dayjs";
import Pagination from "react-js-pagination";

const PetmunityQna = () => {
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
      .get("/petmunity/qna")
      .then((response) => {
        setBoardList([...response.data].reverse());
      })

      .catch(function (error) {
        console.log(error);
      });
  }, []);

  // 페이지네이션을 위해 전체 목록을 기준 개수에 따라 자름
  useEffect(() => {
    setCurrentPost(boardList.slice(indexOfFirstPost, indexOfLastPost));
  }, [boardList, indexOfFirstPost, indexOfLastPost, page]);

  return (
    <div style={{ width: "100%" }}>
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
              pageRangeDisplayed={5}
              prevPageText={"<"}
              nextPageText={">"}
              onChange={handlePageChange}
            />
          </BoardPagination>
        </BoardList>
      </Board>
      {/* 로그인하지 않았을 경우 로그인 창으로 이동하도록 조건 추가 */}
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
                to={"/petmunity/writepage"}
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
};

export default PetmunityQna;

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
