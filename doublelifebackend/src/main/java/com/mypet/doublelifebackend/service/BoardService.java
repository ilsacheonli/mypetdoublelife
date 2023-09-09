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
    public BoardVO selectOne(String category, int bno) {
        return boardRepository.selectOne(category, bno);
    }

    // 게시글 수정
    public void modify(BoardVO boardVO) {
        boardRepository.modify(boardVO);
    }

    // 게시글 삭제
    public void delete(String category, int bno) {
        boardRepository.delete(category, bno);
    }

    // 게시글 클릭 시 조회수 증가
    public void boardViewCnt(String category, int bno) {
        boardRepository.boardViewCnt(category, bno);
    }

    // 카테고리별 저장된 게시물의 총 개수를 반환하는 메서드
    public int countList(String category) {
        return boardRepository.countList(category);
    }

    // 현재 페이지의 게시글 리스트를 반환하는 메서드
    public List<BoardVO> listPage(String category, int firstPost, int lastPost) {
        return boardRepository.listPage(category, firstPost, lastPost);
    }

    // Qna에 글 작성 시 글 번호를 반환하는 메서드
    public int getQnaBno() {
        return boardRepository.getQnaBno();
    }

    // Trade에 글 작성 시 글 번호를 반환하는 메서드
    public int getTradeBno() {
        return boardRepository.getTradeBno();
    }

    // 산책메이트에 글 작성 시 글 번호를 반환하는 메서드
    public int getWalkingmateBno() {
        return boardRepository.getWalkingmateBno();
    }

    // 좋아요 수 증가시키는 메서드
    public void updateLike(String category, int bno) {

        boardRepository.updateLike(category, bno);
    }

    // 글 삭제 후 글 번호를 재조정하는 메서드
    public void updateBno(String category, int nextPostNum, int lastPostNum) {
        boardRepository.updateBno(category,nextPostNum,lastPostNum);
    }
}