package com.mypet.doublelifebackend.service;

import com.mypet.doublelifebackend.repository.HospitalRepository;
import com.mypet.doublelifebackend.vo.PetHospitalVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PetHospitalServiceImpl implements PetHospitalService {
    @Autowired
    HospitalRepository hospitalRepository;

    public List<PetHospitalVO> GetHospitalList() {
        return hospitalRepository.getHospitalList();
    }
}