package com.mypet.doublelifebackend.vo;

import lombok.*;

import java.util.Date;

@ToString
@Setter
@Getter
public class FilesVO {

    private int id;
    private int bno;
    private String originName;
    private String savedName;
    private long fileSize;
    private String savedPath;
    private Date regDate;
    private Date deletedDate;
    private int deleted;

    public FilesVO(int bno, String originName, String savedName, long fileSize, String savedPath) {
        this.bno = bno;
        this.originName = originName;
        this.savedName = savedName;
        this.savedPath = savedPath;
        this.fileSize = fileSize;
    }
}
