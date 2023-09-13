package com.mypet.doublelifebackend.vo;

import lombok.*;

import java.util.Date;

@ToString
@Setter
@Getter
public class FilesVO {

    private int id;
    private int boardId;
    private String originName;
    private String savedName;
    private long fileSize;
    private String savedPath;
    private Date regDate;
    private Date deletedDate;
    private int deleted;

    public FilesVO(int boardId, String originName, String savedName, long fileSize, String savedPath) {
        this.boardId = boardId;
        this.originName = originName;
        this.savedName = savedName;
        this.savedPath = savedPath;
        this.fileSize = fileSize;
    }
}
