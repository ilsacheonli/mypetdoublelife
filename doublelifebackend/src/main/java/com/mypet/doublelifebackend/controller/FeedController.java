package com.mypet.doublelifebackend.controller;

import com.mypet.doublelifebackend.service.FeedService;
import com.mypet.doublelifebackend.vo.FeedImageVO;
import com.mypet.doublelifebackend.vo.FeedVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.UrlResource;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000") //CORS 에러 방지를 위한 어노테이션
@RestController //프론트에 json형식으로 데이터 전송하기 위한 어노테이션
public class FeedController {

    @Autowired
    private FeedService feedService;

    @Autowired
    FeedVO feedVO;

    @GetMapping (value = "/feedlist")
    public List<FeedVO> showFeedMainPage() { // 펫스티벌 메인 피드 화면

        return feedService.getAllFeed();
        //return "petstival/FeedList";
        //resources/templates.FeedList.html
    }

    //원본
//    @GetMapping (value = "/feedview")
//    public List<FeedVO> showFeedDetailPage() { // 펫스티벌 상세 뷰 페이지 화면
//
//        return feedService.getFeedDetail();
//        //return "petstival/FeedView.html";
//        //resources/templates.FeedList.html
//    }

    //테스트
    @GetMapping (value = "/feedview/{feed_no}")
    public List<FeedVO> showFeedDetailPage(@PathVariable int feed_no) { // , FeedVO get_FeedVO

//        get_FeedVO = feedService.getFeedDetail(feed_no);
//
//        if(get_FeedVO == null){
//            return null;
//        }
//
//        String absolutePath = feedService.getImgUploadPath()+get_FeedVO.getF_img_path();
//        String ImageName = get_FeedVO.getF_img_name();

        //return new UrlResource("file:"+absolutePath+"/"+ImageName);

        return feedService.getFeedDetail(feed_no);
        //return "petstival/FeedView.html";
        //resources/templates.FeedList.html
    }

}
