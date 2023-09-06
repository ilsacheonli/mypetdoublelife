package com.mypet.doublelifebackend.vo;

import lombok.Getter;
import org.springframework.stereotype.Component;

@Getter
@Component
public class MyFeedVO {
    private int memNo;
    private int petNo;
    private int feedNo;
    private String feedTitle;
    private String feedContent;
    private int imgNo;

}
