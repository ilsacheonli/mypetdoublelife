package com.mypet.doublelifebackend.service;

import com.mypet.doublelifebackend.repository.MyFeedRepository;
import com.mypet.doublelifebackend.vo.MyFeedVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Service
public class MyFeedService {
    @Autowired
    private MyFeedRepository myFeedRepository;

    public MyFeedVO getMyFeedByNo(int feeNo) {

        return myFeedRepository.selectMyFeedByNo(feeNo);
    }


    public List<MyFeedVO> getAllMyFeed(String memId) {

        return myFeedRepository.selectAllMyFeed(memId);
    }



    public void addMyFeed(MyFeedVO myfeed) {

        myFeedRepository.insertMyFeed(myfeed);
    }

    public void editMyFeed(MyFeedVO myfeed) {

        myFeedRepository.updateMyFeed(myfeed);
    }

    public void removeMyFeed(int feeNo) {

        myFeedRepository.deleteMyFeed(feeNo);
    }

    public int getLastFeedNumber(){

        // getLastNumber()함수 호출 후 memNumber return
        return myFeedRepository.getLastNumber();
    }
}
