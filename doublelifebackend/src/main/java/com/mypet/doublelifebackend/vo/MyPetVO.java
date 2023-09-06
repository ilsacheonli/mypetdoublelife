package com.mypet.doublelifebackend.vo;

import lombok.Getter;
import org.springframework.stereotype.Component;

@Getter
@Component
public class MyPetVO {
    private String memId;
    private int petNo;
    private String petName;
    private String petGender;
    private String petBirth;
    private String petIntro;
    private int imgNo;

    public MyPetVO(){

    }

    public MyPetVO(String memId, int petNo, String petName, String petGender, String petBirth, String petIntro,int imgNo){
        this.memId = memId;
        this.petNo = petNo;
        this.petName = petName;
        this.petGender = petGender;
        this.petBirth = petBirth;
        this.petIntro = petIntro;
        this.imgNo = imgNo;
    }


}
