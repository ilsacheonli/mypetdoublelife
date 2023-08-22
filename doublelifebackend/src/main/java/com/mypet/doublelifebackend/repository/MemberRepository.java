package com.mypet.doublelifebackend.repository;

import com.mypet.doublelifebackend.vo.MemberVO;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository                         // 객체 자동 빈 등록  @Mapper를 포함하고 있음
public interface MemberRepository { // 정의해놓은 sql와 사용할 메서드를 연결하고, 결괏값을 정의해놓은 타입으로 매핑
    MemberVO selectMemberByNum(int memNumber);
    // 인자로 받은 memNumber로 해당 member 정보를 select하는 sql문 함수

    List<MemberVO> selectAllMembers();
    // 리스트 형식으로 전체 member를 select하는 sql문 함수

    void insertMember(MemberVO member);
    // member 정보를 등록하는 insert sql문과 매핑 되어있는

    int getLastNumber();
    // 마지막으로 추가된 memNumber를 호출한 뒤 +1하여 return 하는 함수

}
