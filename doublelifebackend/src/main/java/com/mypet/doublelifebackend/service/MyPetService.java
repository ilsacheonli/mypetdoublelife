package com.mypet.doublelifebackend.service;

import com.mypet.doublelifebackend.repository.MyPetRepository;
import com.mypet.doublelifebackend.vo.MyPetVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MyPetService {
    @Autowired
    private MyPetRepository myPetRepository;

    public MyPetVO getMyPetByName(String memId, String petName) {

        return myPetRepository.selectMyPetByName(memId, petName);
    }


    public List<MyPetVO> getAllMyPets(String memId) {

        return myPetRepository.selectAllMyPet(memId);
    }



    public void addMyPet(MyPetVO mypet) {

        myPetRepository.insertMyPet(mypet);
    }

    public void editMyPet(MyPetVO mypet) {

        myPetRepository.updateMyPet(mypet);
    }

    public void removeMyPet(String memId, String petName) {

        myPetRepository.deleteMyPet(memId, petName);
    }

}
