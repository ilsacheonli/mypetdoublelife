package com.mypet.doublelifebackend.vo;

import lombok.*;

import java.util.Date;

@ToString
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class BoardVO {

    private Integer bno;
    private String category;
    private String title;
    private String writer;
    private String content;
    private int view_cnt;
    private int comment_cnt;
    private int hit_cnt;
    private Date reg_date;
    private Date updated_date;

}
