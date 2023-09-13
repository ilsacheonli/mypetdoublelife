package com.mypet.doublelifebackend.vo;

import lombok.*;

import java.util.Date;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class MemberVO {
    private int memNumber;
    private String memName;
    private String memId;
    private String memPwd;
    private String memEmail;
    private Date memBirth; // Date 타입으로 변경

    public MemberVO(){

    }


    public MemberVO(int memNumber, String memName, String memId, String memPwd, String memEmail, Date memBirth) { // 생성자 역시 Date 타입으로 변경
        this.memNumber = memNumber;
        this.memName = memName;
        this.memId = memId;
        this.memPwd = memPwd;
        this.memEmail = memEmail;
        this.memBirth = memBirth;
    }


}