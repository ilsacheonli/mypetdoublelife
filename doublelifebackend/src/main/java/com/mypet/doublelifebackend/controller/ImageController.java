package com.mypet.doublelifebackend.controller;

import com.mypet.doublelifebackend.service.ImageService;
import com.mypet.doublelifebackend.vo.ImageVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.net.MalformedURLException;


@Controller
public class ImageController {
    @Autowired
    private ImageService imageService;

    @ResponseBody
    @RequestMapping(value = "/image", method = RequestMethod.GET)
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
