package com.mypet.doublelifebackend.vo;

import lombok.Getter;
import org.springframework.stereotype.Component;

@Getter
@Component
public class MyFeedVO {
    private String memId;
    private String petName;
    private int feedNo;
    private String feedTitle;
    private String feedContent;
    private int imgNo;


    public MyFeedVO(){

    }

    public MyFeedVO(String memId, String petName, int feedNo, String feedTitle, String feedContent,int imgNo){
        this.memId = memId;
        this.petName = petName;
        this.feedNo = feedNo;
        this.feedTitle = feedTitle;
        this.feedContent = feedContent;
        this.imgNo = imgNo;
    }
}
