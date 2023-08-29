package com.mypet.doublelifebackend.vo;

import lombok.Getter;
import org.springframework.stereotype.Component;

@Getter
@Component
public class MyPetVO {
    private String memId;
    private String petName;
    private String petGender;
    private String petBirth;
    private String petIntro;

    public MyPetVO(){

    }

    public MyPetVO(String memId, String petName, String petGender, /*String petIntro,*/ String petIntro){
        this.memId = memId;
        this.petName = petName;
        this.petGender = petGender;
        //this.petBirth = petBirth;
        this.petIntro = petIntro;
    }


}
