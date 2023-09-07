package com.mypet.doublelifebackend.repository;

import com.mypet.doublelifebackend.vo.MyFeedVO;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;

@Repository
public interface MyFeedRepository {
    MyFeedVO selectMyFeedByNo(int feeNo);

    List<MyFeedVO> selectAllMyFeed(String memId);

    void insertMyFeed(MyFeedVO myfeed);

    void updateMyFeed(MyFeedVO myfeed);

    void deleteMyFeed(int feeNo);

    int getLastNumber();

}
