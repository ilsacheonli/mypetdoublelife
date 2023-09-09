package com.mypet.doublelifebackend.vo;

import lombok.Getter;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.lang.String;

@Getter
@Component
//@ComponentScan(basePackages={"com.mypet.doublelifebackend"})
public class FeedVO {
    private String user_id; // 사용자 아이디
    private String user_name; // 사용자 이름
    private int likeNum; //좋아요 수
    private String contentTitle; // 피드 제목
    private LocalDateTime regTime; // 피드 등록 시간
    private String contentText; // 피드 내용 //그래서 이거 한줄 더 추가해준.. 그리고 나서 모든 타입이 인식이 안되는...


    //private String contentImage; // 피드 콘텐츠 이미지
    //private String user_image; // 사용자 프로필 사진


    public FeedVO(String user_id, String user_name, int likeNum, String contentTitle, LocalDateTime regTime, String contentText) {
        this.user_id = user_id;
        this.user_name = user_name;
        this.likeNum = likeNum;
        this.contentTitle = contentTitle;
        this.regTime = regTime;
        this.contentText = contentText;
    } //constructor 생성
}
