package com.mypet.doublelifebackend.controller;

import com.mypet.doublelifebackend.service.FeedImageService;
import com.mypet.doublelifebackend.service.FeedService;
import com.mypet.doublelifebackend.vo.FeedImageVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.net.MalformedURLException;

@CrossOrigin(origins = "http://localhost:3000") //CORS 에러 방지를 위한 어노테이션
//@RestController

@Controller
public class FeedImageController {
    @Autowired
    private FeedImageService feedImageService;

    @Autowired
    FeedImageVO feedImageVO;

    @ResponseBody
    @GetMapping( "/image/petstival/{f_img_no}")
    public Resource getPetstivalImage(@PathVariable int f_img_no, FeedImageVO get_FeedImageVO) throws MalformedURLException {

        get_FeedImageVO = feedImageService.getImageNo(f_img_no);

        if(get_FeedImageVO == null){
            return null;
        }

        String absolutePath = feedImageService.getImgUploadPath()+get_FeedImageVO.getF_img_path();
        String ImageName = get_FeedImageVO.getF_img_name();
        return new UrlResource("file:"+absolutePath+"/"+ImageName);
        // 다시 해보실래요?
        //넵. 도전. 좀 걸려요..
        //경로 이슈가 있나본데요. 일단 이미지는 이거 여기 맞춰서 위에 겟매핑 주소 맞춘건데..아됐다

    }
}
