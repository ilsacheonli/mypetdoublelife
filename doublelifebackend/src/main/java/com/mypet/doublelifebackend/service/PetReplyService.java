package com.mypet.doublelifebackend.service;

import com.mypet.doublelifebackend.repository.PetReplyRepository;
import com.mypet.doublelifebackend.vo.PetReplyVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Service
public class PetReplyService {
    @Autowired
    PetReplyRepository petReplyRepository;

    public PetReplyVO getPetReplyByNo(int reNo){
        return petReplyRepository.selectPetReplyByNo(reNo);
    }

    public List<PetReplyVO> getAllPetReplyByMfNo(int myFeedNo){
        return petReplyRepository.selectAllPetReplyByMfNo(myFeedNo);
    }

    public List<PetReplyVO> getAllPetReplyByPtNo(int petstivalNo){

        return petReplyRepository.selectAllPetReplyByPtNo(petstivalNo);
    }

    public void addMyFeedReply(PetReplyVO petReply){
        petReplyRepository.insertMyFeedReply(petReply);
    }

    public void addPetstivalReply(PetReplyVO petReply){
        petReplyRepository.insertPetstivalReply(petReply);
    }

    public void removePetReply(HashMap<String, Object> map){
        petReplyRepository.deletePetReply(map);
    }

    public int getLastReNoNumber(){

        // getLastNumber()함수 호출 후 memNumber return
        return petReplyRepository.getLastNumber();
    }

}
