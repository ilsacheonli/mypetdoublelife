package com.mypet.doublelifebackend.repository;

import com.mypet.doublelifebackend.vo.BoardReplyVO;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;

@Repository
public interface BoardReplyRepository {

    BoardReplyVO selectBoardReplyByBrNo(int breplyNo);

    List<BoardReplyVO> selectAllBoardReplyBybNo(int boardId);

    void insertBoardReply(BoardReplyVO boardReply);

    void deleteBoardReply(HashMap<String, Object> map);

    int getLastNumber();



}
