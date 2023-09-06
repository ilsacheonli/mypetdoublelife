package com.mypet.doublelifebackend.vo;

import lombok.Getter;
import org.springframework.stereotype.Component;

@Getter
@Component
public class ImageVO {
    private int imgNo;
    private String originImgName;
    private String newImgName;
    private String imgPath;

    public ImageVO(){

    }

    public ImageVO(int imgNo, String originImgName, String newImgName, String imgPath) {
        this.imgNo = imgNo;
        this.originImgName = originImgName;
        this.newImgName = newImgName;
        this.imgPath = imgPath;
    }
}
