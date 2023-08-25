package com.mypet.doublelifebackend.repository;

import com.mypet.doublelifebackend.vo.PetHospitalVO;
import org.apache.ibatis.annotations.Mapper;
import java.util.List;
@Mapper
public interface HospitalRepository {
    public List<PetHospitalVO> selectList();

}
