package com.mypet.doublelifebackend.service;

import com.mypet.doublelifebackend.repository.MyPetRepository;
import com.mypet.doublelifebackend.vo.MyPetVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Service
public class MyPetService {
    @Autowired
    private MyPetRepository myPetRepository;

    public MyPetVO getMyPetByNo(int petNo) {

        return myPetRepository.selectMyPetByNo(petNo);
    }

    public int getMyPetImgByNo(int petNo) {

        return myPetRepository.selectMyPetImgByNo(petNo);
    }


    public List<MyPetVO> getAllMyPets(String memId) {

        return myPetRepository.selectAllMyPet(memId);
    }

    public List<Integer> getAllMyPetNo(String memId) {

        return myPetRepository.selectAllMyPetNo(memId);
    }



    public void addMyPet(MyPetVO mypet) {

        myPetRepository.insertMyPet(mypet);
    }

    public void editMyPet(MyPetVO mypet) {

        myPetRepository.updateMyPet(mypet);
    }

    public void removeMyPet(int petNo) {

        myPetRepository.deleteMyPet(petNo);
    }

    public int getLastPetNumber(){

        // getLastNumber()함수 호출 후 memNumber return
        return myPetRepository.getLastNumber();
    }

}
