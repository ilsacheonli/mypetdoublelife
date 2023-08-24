package com.mypet.doublelifebackend.controller;

import com.mypet.doublelifebackend.dao.HospitalDAO;
import com.mypet.doublelifebackend.entity.PetHospital;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PetHospitalController {
    @Autowired
    HospitalDAO hospitalDAO;

    @GetMapping("/pethospital")
    public List<PetHospital> getPetHospitals() {
        return hospitalDAO.selectList();
    }
}
