package com.mypet.doublelifebackend.repository;

import com.mypet.doublelifebackend.vo.FeedVO;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository // 객체 자동 빈 등록  @Mapper를 포함하고 있음
public interface FeedRepository { // 정의해놓은 sql와 사용할 메서드를 연결하고, 결괏값을 정의해놓은 타입으로 매핑
    List<FeedVO> selectAllFeed(); //리스트 형식으로 펫스티벌 피드 메인에 필요한 요소를 select 하는 sql 함수
    //()안에는 인자로 받아올 정보 넣기 가능

    List<FeedVO> selectFeedView();
    //펫스티벌 상세 뷰 페이지

}