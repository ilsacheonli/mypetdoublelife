package com.mypet.doublelifebackend.service;

import com.mypet.doublelifebackend.repository.BoardRepository;
import com.mypet.doublelifebackend.vo.BoardVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardService {

    @Autowired
    private BoardRepository boardRepository;

    // 카테고리의 전체 게시글 리스트를 반환하는 메서드
    public List<BoardVO> list(String category) {
        return boardRepository.list(category);
    }
    // Qna 게시판에 글을 작성하는 메서드
    public void writeQna(BoardVO boardVO) {
        boardRepository.writeQna(boardVO);
    }

    // Trade 게시판에 글을 작성하는 메서드
    public void writeTrade(BoardVO boardVO) {
        boardRepository.writeTrade(boardVO);
    }

    // 산책메이트 게시판에 글을 작성하는 메서드
    public void writeWalkingmate(BoardVO boardVO) {
        boardRepository.writeWalkingmate(boardVO);
    }

    // 게시글 상세 조회
    public BoardVO selectOne(int id) {
        return boardRepository.selectOne(id);
    }

    // 게시글 수정
    public void modify(BoardVO boardVO) {
        boardRepository.modify(boardVO);
    }

    // 게시글 삭제
    public void delete(int id) {
        boardRepository.delete(id);
    }

    // 게시글 클릭 시 조회수 증가
    public void boardViewCnt(int id) {
        boardRepository.boardViewCnt(id);
    }

    // 게시글번호 조정 후 글 리스트를 반환하는 메서드
    public List<BoardVO> listPage(String category) {
        return boardRepository.listPage(category);
    }
}