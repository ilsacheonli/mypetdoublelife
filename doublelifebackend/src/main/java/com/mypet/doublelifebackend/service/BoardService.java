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

    public void write(BoardVO boardVO) {

        boardRepository.write(boardVO);

    }


    public BoardVO selectOne(int bno) {

        return boardRepository.selectOne(bno);

    }


    public void modify(BoardVO boardVO) {

        boardRepository.modify(boardVO);

    }


    public void delete(int bno) {
        boardRepository.delete(bno);
    }
}
