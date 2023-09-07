package com.mypet.doublelifebackend.controller;

import com.mypet.doublelifebackend.service.ImageService;
import com.mypet.doublelifebackend.vo.ImageVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;


@RestController
public class ImageController {
    @Autowired
    private ImageService imageService;

    @GetMapping("/image/profile")
    public String setProfileImg(@RequestParam("profileImg") MultipartFile profileImg, @RequestParam("imgNo") int imgNo) throws IOException {

        int updated_img_no = imageService.updateImage(profileImg,imgNo, "profile");

        ImageVO updated_img = imageService.getImageByNum(updated_img_no);

        if(String.valueOf(updated_img).equals("null")){
            return "/mypet?ImgUpdateFail";
        }

        return "/mypet?ImgUpdateSuccess";
    }

    @ResponseBody
    @GetMapping( "/image")
    public Resource getImage(@RequestParam("imgNum") int imgNum, ImageVO geted_imageVO) throws MalformedURLException {

        geted_imageVO = imageService.getImageByNum(imgNum);

        if(geted_imageVO == null){
            return null;
        }

        String absolutePath = geted_imageVO.getImgPath();
        String newImageName = geted_imageVO.getNewImgName();

        return new UrlResource("file:"+absolutePath+"/"+newImageName);
    }


}
