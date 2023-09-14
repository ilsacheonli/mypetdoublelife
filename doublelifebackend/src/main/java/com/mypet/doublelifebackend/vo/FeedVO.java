package com.mypet.doublelifebackend.vo;

import lombok.Getter;
import org.springframework.stereotype.Component;
import java.time.LocalDateTime;
import java.lang.String;

@Getter
@Component
public class FeedVO {
    private int feed_no; // 피드 게시글 번호
    private String user_id; // 사용자 아이디
    private String user_name; // 사용자 이름
    private int likenum; //좋아요 수
    private String contenttitle; // 피드 게시글 제목
    private String contenttext; // 피드 게시글 내용
    private LocalDateTime regtime; // 피드 등록 일자
    private int f_img_no; // 피드 게시글의 이미지 번호
    private String f_img_name; // 피드 게시글의 이미지 이름
    private String f_img_path; // 피드 게시글의 이미지 경로

    
    public FeedVO(){

    } // 생성자

    public FeedVO(int feed_no, String user_id, String user_name, int likenum, String contenttitle, String contenttext, LocalDateTime regtime, int f_img_no, String f_img_name, String f_img_path) {
        this.feed_no = feed_no;
        this.user_id = user_id;
        this.user_name = user_name;
        this.likenum = likenum;
        this.contenttitle = contenttitle;
        this.contenttext = contenttext;
        this.regtime = regtime;
        this.f_img_no = f_img_no;
        this.f_img_name = f_img_name;
        this.f_img_path = f_img_path;
    } // Constructor
}
