package com.mypet.doublelifebackend.service;

import com.mypet.doublelifebackend.repository.FeedRepository;
import com.mypet.doublelifebackend.vo.FeedVO;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.io.File;
import java.util.List;

@Service
public class FeedService { // sql문과 연결된 MemberRepository 함수 호출

    @Autowired
    private FeedRepository feedRepository;

    public List<FeedVO> getAllFeed() {
        //selectAllFeed() 호출 후 Feed list 리턴
        return feedRepository.selectAllFeed();
    }

    public List<FeedVO> getFeedDetail() {
        //selectFeedView() 호출 후 리턴
        return feedRepository.selectFeedView();
    }

}
