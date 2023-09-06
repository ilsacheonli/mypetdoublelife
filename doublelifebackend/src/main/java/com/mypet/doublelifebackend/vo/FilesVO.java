package com.mypet.doublelifebackend.vo;

import lombok.*;

import java.util.Date;

@ToString
@Setter
@Getter
public class FilesVO {

    private int id;
    private String category;
    private int bno;
    private String originName;
    private String savedName;
    private long fileSize;
    private String savedPath;
    private Date regDate;
    private Date deletedDate;
    private int deleted;

    public FilesVO(String category, int bno, String originName, String savedName, long fileSize, String savedPath) {
        this.category = category;
        this.bno = bno;
        this.originName = originName;
        this.savedName = savedName;
        this.savedPath = savedPath;
        this.fileSize = fileSize;
    }
}
