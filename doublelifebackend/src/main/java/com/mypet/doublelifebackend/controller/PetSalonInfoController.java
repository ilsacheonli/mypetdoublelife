package com.mypet.doublelifebackend.controller;

import com.mypet.doublelifebackend.repository.SalonRepository;
import com.mypet.doublelifebackend.vo.PetSalonVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
public class PetSalonInfoController {

    @Autowired
    SalonRepository salonRepository;

    @GetMapping("/petsalon")
    public List<PetSalonVO> GetSalonList() {
        return salonRepository.getSalonList();
    }
}
