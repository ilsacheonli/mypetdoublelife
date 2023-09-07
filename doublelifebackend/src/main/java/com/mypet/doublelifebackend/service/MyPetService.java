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

    public MyPetVO getMyPetByName(HashMap<String, Object> map) {

        return myPetRepository.selectMyPetByName(map);
    }

    public MyPetVO getMyPetByNo(HashMap<String, Object> map) {

        return myPetRepository.selectMyPetByNo(map);
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

    public void removeMyPet(HashMap<String, Object> map) {

        myPetRepository.deleteMyPet(map);
    }

    public int getLastPetNumber(){

        // getLastNumber()함수 호출 후 memNumber return
        return myPetRepository.getLastNumber();
    }

}
