package com.mypet.doublelifebackend.vo;

import lombok.Getter;
import org.springframework.stereotype.Component;

@Getter
@Component
public class BoardReplyVO {

    private String memId;
    private int breplyNo;
    private int boardId;
    private String reContent;
    private String regDate;

    public BoardReplyVO(){

    }

    public BoardReplyVO(String memId, int breplyNo, int boardId, String reContent){
        this.memId = memId;
        this.breplyNo = breplyNo;
        this.boardId = boardId;
        this.reContent = reContent;
    }
}
