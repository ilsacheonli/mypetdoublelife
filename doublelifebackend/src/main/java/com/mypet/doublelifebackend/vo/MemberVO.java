package com.mypet.doublelifebackend.vo;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import org.springframework.stereotype.Component;

@Getter
@Component
public class MemberVO {
    private int memNumber;
    private String memName;
    private String memId;
    private String memPwd;
    private String memEmail;
    private String memBirth;

    public MemberVO(){

    }

    public MemberVO(int memNumber, String memName, String memId, String memPwd, String memEmail/*, String memBirth*/){
        this.memNumber = memNumber;
        this.memName = memName;
        this.memId = memId;
        this.memPwd = memPwd;
        this.memEmail = memEmail;
        //this.memBirth = memBirth;
    }


}
