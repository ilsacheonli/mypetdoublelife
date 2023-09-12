package com.mypet.doublelifebackend.service;

import com.mypet.doublelifebackend.repository.FeedImageRepository;
import com.mypet.doublelifebackend.vo.FeedImageVO;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.File;

@Service
public class FeedImageService {

    @Autowired
    private FeedImageRepository feedImageRepository;

    @Getter
    private final String imgUploadPath = new File("mypetdoublelife/doublelifebackend/src/main").getAbsolutePath();

    public FeedImageVO getImageNo(int f_img_No){

        return feedImageRepository.getImgNo(f_img_No);
    }

}
