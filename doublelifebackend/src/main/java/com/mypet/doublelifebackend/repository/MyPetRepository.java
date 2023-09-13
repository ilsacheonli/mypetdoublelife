package com.mypet.doublelifebackend.repository;

import com.mypet.doublelifebackend.vo.MyPetVO;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;


@Repository
public interface MyPetRepository {

    MyPetVO selectMyPetByNo(int petNo);
    int selectMyPetImgByNo(int petNo);

    List<MyPetVO> selectAllMyPet(String memId);
    List<Integer> selectAllMyPetNo(String memId);


    void insertMyPet(MyPetVO mypet);

    void updateMyPet(MyPetVO mypet);

    void deleteMyPet(int petNo);

    int getLastNumber();



}
