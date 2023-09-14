package com.mypet.doublelifebackend.service;

import com.mypet.doublelifebackend.repository.BoardReplyRepository;
import com.mypet.doublelifebackend.vo.BoardReplyVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Service
public class BoardReplyService {
    @Autowired
    BoardReplyRepository boardReplyRepository;

    public BoardReplyVO getBoardReplyByBrNo(int breplyNo){

        return boardReplyRepository.selectBoardReplyByBrNo(breplyNo);
    }

    public List<BoardReplyVO> getAllBoardReplyBybNo(int boardId){
        return boardReplyRepository.selectAllBoardReplyBybNo(boardId);
    }

    public void addBoardReply(BoardReplyVO boardReply){

        boardReplyRepository.insertBoardReply(boardReply);
    }

    public void removeBoardReply(HashMap<String, Object> map){
        boardReplyRepository.deleteBoardReply(map);
    }

    public int getLastBreNoNumber(){

        // getLastNumber()함수 호출 후 memNumber return
        return boardReplyRepository.getLastNumber();
    }

}
