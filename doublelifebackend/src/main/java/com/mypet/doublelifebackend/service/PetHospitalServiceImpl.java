package com.mypet.doublelifebackend.service;

import com.mypet.doublelifebackend.repository.HospitalRepository;
import com.mypet.doublelifebackend.vo.PetHospitalVO;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class PetHospitalServiceImpl {
    @Autowired
    HospitalRepository hospitalRepository;

    public List<PetHospitalVO> selectList() {
        return hospitalRepository.selectList();
    }
}