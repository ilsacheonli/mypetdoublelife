package com.mypet.doublelifebackend.controller;

import com.mypet.doublelifebackend.repository.HospitalRepository;
import com.mypet.doublelifebackend.vo.PetHospitalVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PetHospitalInfoController {
    @Autowired
    HospitalRepository hospitalRepository;

    @GetMapping("/pethospital")
    public List<PetHospitalVO> GetHospitalList() {
        return hospitalRepository.getHospitalList();
    }
}
