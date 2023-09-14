package com.mypet.doublelifebackend.vo;

import lombok.Getter;
import org.springframework.stereotype.Component;

@Getter
@Component
public class PetReplyVO {

    private String memId;
    private int reNo;
    private int myFeedNo;
    private int petstivalNo;
    private String reContent;
    private String regDate;

    public PetReplyVO(){

    }

    public PetReplyVO(String memId, int reNo, int setNo, String setWhoReply, String reContent){
        this.memId = memId;
        this.reNo = reNo;

        if(setWhoReply.equals("myFeed")){
            this.myFeedNo = setNo;
        }else if (setWhoReply.equals("petstival")) {
            this.petstivalNo = setNo;
        }

        this.reContent = reContent;
    }
}
