package com.mypet.doublelifebackend.vo;

import lombok.Getter;
import org.springframework.stereotype.Component;

@Getter
@Component
public class MyPetVO {
    private String memName;
    private String memId;
    private String memPwd;
    private String memEmail;
    private String memBirth;

    public MyPetVO(){

    }

    public MyPetVO(String memName, String memId, String memPwd, String memEmail/*, String memBirth*/){
        this.memName = memName;
        this.memId = memId;
        this.memPwd = memPwd;
        this.memEmail = memEmail;
        //this.memBirth = memBirth;
    }


}
