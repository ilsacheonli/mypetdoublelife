package com.mypet.doublelifebackend.vo;

import lombok.Getter;
import org.springframework.stereotype.Component;

@Getter
@Component
public class FeedImageVO {
    private int f_img_no;
    private String f_img_name;
    private String f_img_path;

    public FeedImageVO() {

    } //생성자

    public FeedImageVO(int f_img_no, String f_img_name, String f_img_path) {
        this.f_img_no = f_img_no;
        this.f_img_name = f_img_name;
        this.f_img_path = f_img_path;
    } //constructor 생성

//    public int getF_img_no() {
//        return f_img_no;
//    }
//
//    public String getF_img_name() {
//        return f_img_name;
//    }
//
//    public String getF_img_path() {
//        return f_img_path;
//    }
}
