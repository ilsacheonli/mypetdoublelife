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

    public List<BoardVO> list(String category) {

        return boardRepository.list(category);
    }

    public void writeQna(BoardVO boardVO) {
        boardRepository.writeQna(boardVO);
    }

    public void writeTrade(BoardVO boardVO) {
        boardRepository.writeTrade(boardVO);
    }

    public void writeWalkingmate(BoardVO boardVO) {
        boardRepository.writeWalkingmate(boardVO);
    }

    public BoardVO selectOne(String category, int bno) {

        return boardRepository.selectOne(category, bno);
    }


    public void modify(BoardVO boardVO) {

        boardRepository.modify(boardVO);
    }


    public void delete(String category, int bno) {

        boardRepository.delete(category, bno);
    }

    public void boardViewCnt(String category, int bno) {

        boardRepository.boardViewCnt(category, bno);
    }

    // 저장된 게시물의 총 개수를 반환하는 메서드
    public int countList(String category) {
        return boardRepository.countList(category);
    }

    // 현재 페이지의 게시글 리스트를 반환하는 메서드
    public List<BoardVO> listPage(String category, int firstPost, int lastPost) {
        return boardRepository.listPage(category, firstPost, lastPost);
    }

    // 게시글 작성 시 글 번호를 반환하는 메서드
    public int getQnaBno() { return boardRepository.getQnaBno(); }

    // 좋아요 수 증가시키는 메서드
    public void updateLike(String category, int bno) {
        boardRepository.updateLike(category, bno);
    }

    //글 번호 조정하는 메서드
    public void updateBno(String category, int nextPostNum, int lastPostNum) {
        boardRepository.updateBno(category,nextPostNum,lastPostNum);
    }
}
