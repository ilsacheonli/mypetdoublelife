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

    public MyPetVO getMyPetByNum(int memNumber) {

        return myPetRepository.selectMyPetByNum(memNumber);
    }


    public List<MyPetVO> getAllMyPets() {

        return myPetRepository.selectAllMyPets();
    }



    public int addMyPet(MyPetVO mypet) {

        myPetRepository.insertMyPet(mypet);
        return 1;
    }

    public int editMyPet(MyPetVO mypet) {

        myPetRepository.updateMyPet(mypet);
        return 1;
    }


}
