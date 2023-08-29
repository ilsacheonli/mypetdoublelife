package com.mypet.doublelifebackend.repository;

import com.mypet.doublelifebackend.vo.MyPetVO;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface MyPetRepository {
    MyPetVO selectMyPetByName(String memId, String petName);

    List<MyPetVO> selectAllMyPet(String memId);

    void insertMyPet(MyPetVO mypet);

    void updateMyPet(MyPetVO mypet);

    void deleteMyPet(String memId, String petName);



}
