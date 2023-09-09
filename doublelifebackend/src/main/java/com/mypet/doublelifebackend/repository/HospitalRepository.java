package com.mypet.doublelifebackend.repository;

import com.mypet.doublelifebackend.vo.PetHospitalVO;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface HospitalRepository {
    List<PetHospitalVO> getHospitalList();
}
