package com.mypet.doublelifebackend.repository;

import com.mypet.doublelifebackend.vo.MyPetVO;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;


@Repository
public interface MyPetRepository {

    MyPetVO selectMyPetByName(HashMap<String, Object> map);
    MyPetVO selectMyPetByNo(HashMap<String, Object> map);
    int selectMyPetImgByNo(HashMap<String, Object> map);

    List<MyPetVO> selectAllMyPet(String memId);
    List<Integer> selectAllMyPetNo(String memId);


    void insertMyPet(MyPetVO mypet);

    void updateMyPet(MyPetVO mypet);

    void deleteMyPet(HashMap<String, Object> map);

    int getLastNumber();



}
