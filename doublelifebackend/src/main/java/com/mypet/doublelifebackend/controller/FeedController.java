package com.mypet.doublelifebackend.controller;

import com.mypet.doublelifebackend.service.FeedService;
import com.mypet.doublelifebackend.vo.FeedVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000") //CORS 에러 방지를 위한 어노테이션
//@Controller //테스트 끝나고 어노테이션 변경하기
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

    @GetMapping (value = "/feedview")
    public List<FeedVO> showFeedDetailPage() { // 펫스티벌 상세 뷰 페이지 화면

        return feedService.getFeedDetail();
        //return "petstival/FeedView.html";
        //resources/templates.FeedList.html
    }


}
