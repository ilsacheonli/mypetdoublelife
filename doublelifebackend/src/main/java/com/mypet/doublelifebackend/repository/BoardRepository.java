package com.mypet.doublelifebackend.repository;

import com.mypet.doublelifebackend.vo.BoardVO;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BoardRepository {
    List<BoardVO> list(String category);
    void writeQna(BoardVO boardVO);
    void writeTrade(BoardVO boardVO);
    void writeWalkingmate(BoardVO boardVO);
    BoardVO selectOne(int id);
    void modify(BoardVO boardVO);
    void delete(int id);
    void boardViewCnt(int id);
    int countList(String category);
    List<BoardVO> listPage(String category, int firstPost, int lastPost);
    int getQnaBno();
    int getTradeBno();
    int getWalkingmateBno();
    void updateLike(int id);
    void updateBno(String category, int nextPostNum, int lastPostNum);
}