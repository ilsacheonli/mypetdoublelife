package com.mypet.doublelifebackend.repository;

import com.mypet.doublelifebackend.vo.MyPetVO;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository                         // 객체 자동 빈 등록  @Mapper를 포함하고 있음
public interface MyPetRepository { // 정의해놓은 sql와 사용할 메서드를 연결하고, 결괏값을 정의해놓은 타입으로 매핑
    MyPetVO selectMyPetByNum(int memNumber);
    // 인자로 받은 memNumber로 해당 member 정보를 select하는 sql문 함수

    MyPetVO selectMyPetByLogin(String id, String pwd);
    // 인자로 받은 memNumber로 해당 member 정보를 select하는 sql문 함수

    List<MyPetVO> selectAllMyPets();
    // 리스트 형식으로 전체 member를 select하는 sql문 함수

    void insertMyPet(MyPetVO mypet);
    // member 정보를 등록하는 insert sql문 함수

    void updateMyPet(MyPetVO mypet);
    // member 정보를 수정하는 update sql문 함수


}
