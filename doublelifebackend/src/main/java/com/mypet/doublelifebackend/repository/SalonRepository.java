package com.mypet.doublelifebackend.repository;
import com.mypet.doublelifebackend.vo.PetSalonVO;
import org.springframework.stereotype.Repository;
import java.util.List;
public interface SalonRepository {
    List<PetSalonVO> getSalonList();

}
