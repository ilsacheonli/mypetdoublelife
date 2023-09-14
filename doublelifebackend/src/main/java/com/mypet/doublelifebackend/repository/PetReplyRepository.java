package com.mypet.doublelifebackend.repository;

import com.mypet.doublelifebackend.vo.PetReplyVO;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;

@Repository
public interface PetReplyRepository {

    PetReplyVO selectPetReplyByNo(int reNo);

    List<PetReplyVO> selectAllPetReplyByMfNo(int myFeedNo);

    List<PetReplyVO> selectAllPetReplyByPtNo(int petstivalNo);

    void insertMyFeedReply(PetReplyVO petReply);

    void insertPetstivalReply(PetReplyVO petReply);

    void deletePetReply(HashMap<String, Object> map);

    int getLastNumber();



}
