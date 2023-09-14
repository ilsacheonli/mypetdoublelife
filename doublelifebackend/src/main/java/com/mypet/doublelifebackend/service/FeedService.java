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


    //펫스티벌 상세 뷰 처리부 - VO 형태로 데이터 전송
    @Getter
    private final String imgUploadPath = new File("mypetdoublelife/doublelifebackend/src/main").getAbsolutePath();
    public FeedVO getFeedDetail(int feed_no){

        return feedRepository.selectFeedView(feed_no);
    }


    //펫스티벌 상세뷰 처리 - List 형으로 데이터 전송
//    public List<FeedVO> getFeedDetail() {
//        //selectFeedView() 호출 후 리턴
//        return feedRepository.selectFeedView();
//    }

}
