package com.mypet.doublelifebackend.service;

import com.mypet.doublelifebackend.dao.HospitalDAO;
import com.mypet.doublelifebackend.entity.PetHospital;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class PetHospitalServiceImpl {
    @Autowired
    HospitalDAO hospitalDAO;

    public List<PetHospital> selectList() {
        return hospitalDAO.selectList();
    }
}