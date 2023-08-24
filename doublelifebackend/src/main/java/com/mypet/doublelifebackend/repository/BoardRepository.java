package com.mypet.doublelifebackend.repository;

import com.mypet.doublelifebackend.vo.BoardVO;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BoardRepository {
    List<BoardVO> list(String category);
    void write(BoardVO boardVO);
    BoardVO selectOne(int bno);
    void modify(BoardVO boardVO);
    void delete(int bno);
}
