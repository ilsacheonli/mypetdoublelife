package com.mypet.doublelifebackend.service;
import com.mypet.doublelifebackend.repository.SalonRepository;
import com.mypet.doublelifebackend.vo.PetSalonVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
public class PetSalonServiceImpl implements PetSalonService{
    @Autowired
    SalonRepository salonRepository;

    public List<PetSalonVO> GetSalonList(){
        return salonRepository.getSalonList();
    }
}
