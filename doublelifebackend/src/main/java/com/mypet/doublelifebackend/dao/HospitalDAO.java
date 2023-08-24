package com.mypet.doublelifebackend.dao;

import com.mypet.doublelifebackend.entity.PetHospital;
import org.apache.ibatis.annotations.Mapper;
import java.util.List;
@Mapper
public interface HospitalDAO {
    public List<PetHospital> selectList();

}
