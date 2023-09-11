package com.mypet.doublelifebackend.vo;

import lombok.Getter;
import org.springframework.stereotype.Component;

@Getter
@Component
public class TodoVO {

    private String memId;
    private int doNo;
    private String doDate;
    private String doContent;

    public TodoVO(){

    }

    public TodoVO(String memId, int doNo, String doDate, String doContent){
        this.memId = memId;
        this.doNo = doNo;
        this.doDate = doDate;
        this.doContent = doContent;
    }


}
