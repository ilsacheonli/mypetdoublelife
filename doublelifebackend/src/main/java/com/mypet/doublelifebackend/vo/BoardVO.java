package com.mypet.doublelifebackend.vo;

import lombok.*;

import java.util.Date;

@ToString
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class BoardVO {

    private int id;
    private int bno;
    private String category;
    private String title;
    private String writer;
    private String content;
    private int viewCnt;
    private int commentCnt;
    private int hitCnt;
    private Date regDate;
    private Date updatedDate;

}
