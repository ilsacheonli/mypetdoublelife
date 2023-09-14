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

    //펫스티벌 상세 뷰 처리부 - VO 형태로 데이터 전송
    @GetMapping (value = "/feedview/{feed_no}")
    public FeedVO showFeedDetailPage(@PathVariable int feed_no) {

        return feedService.getFeedDetail(feed_no);
    }


}

