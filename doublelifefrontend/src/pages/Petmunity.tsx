import React, { useState } from "react";
import { Tab, Tabs, Table, Dropdown, InputGroup, Form, Button } from "react-bootstrap";

function Petmunity() {
    
  return (
    <>
      <Tabs
        defaultActiveKey="Q&A"
        id="justify-tab-petmunity"
        className="mb-3"
        justify
      >
        <Tab eventKey="qna" title="Q&A">
          <InputGroup className="mb-3">
            <Dropdown className="d-inline mx-2">
              <Dropdown.Toggle>전체</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>제목</Dropdown.Item>
                <Dropdown.Item>작성자</Dropdown.Item>
                <Dropdown.Item>제목 + 작성자</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Form.Control
                placeholder="검색"
                aria-label="search"
            />
            <Button>
                <img src='/search.svg' alt="search" />
            </Button>
          </InputGroup>
          <div className="TextLeft">total</div>
          <Table responsive="sm">
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
                <td>test1</td>
                <td>user1</td>
                <td>2023.8.14</td>
                <td>123</td>
              </tr>
            </tbody>
          </Table>
          <Button>글쓰기</Button>
        </Tab>
        <Tab eventKey="trade" title="중고거래">
        <InputGroup className="mb-3">
            <Dropdown className="d-inline mx-2">
              <Dropdown.Toggle>전체</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>제목</Dropdown.Item>
                <Dropdown.Item>작성자</Dropdown.Item>
                <Dropdown.Item>제목 + 작성자</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Form.Control
                placeholder="검색"
                aria-label="search"
            />
            <Button>
                <img src='/search.svg' alt="search" />
            </Button>
          </InputGroup>
          <div className="TextLeft">total</div>
          <Table responsive="sm">
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
                <td>test1</td>
                <td>user1</td>
                <td>2023.8.14</td>
                <td>123</td>
              </tr>
            </tbody>
          </Table>
          <Button>글쓰기</Button>
        </Tab>
        <Tab eventKey="walkingmate" title="산책 메이트">
        <InputGroup className="mb-3">
            <Dropdown className="d-inline mx-2">
              <Dropdown.Toggle>전체</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>제목</Dropdown.Item>
                <Dropdown.Item>작성자</Dropdown.Item>
                <Dropdown.Item>제목 + 작성자</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Form.Control
                placeholder="검색"
                aria-label="search"
            />
            <Button>
                <img src='/search.svg' alt="search" />
            </Button>
          </InputGroup>
          <div className="TextLeft">total</div>
          <Table responsive="sm">
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
                <td>test1</td>
                <td>user1</td>
                <td>2023.8.14</td>
                <td>123</td>
              </tr>
            </tbody>
          </Table>
          <Button>글쓰기</Button>
        </Tab>
      </Tabs>
    </>
  );
}

export default Petmunity;
