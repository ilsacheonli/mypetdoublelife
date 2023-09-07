package com.mypet.doublelifebackend.service;

import com.mypet.doublelifebackend.repository.UserRepository;
import com.mypet.doublelifebackend.vo.UserVO;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.SimpleDateFormat;
import java.util.Date;

@Service
@RequiredArgsConstructor
public class UserService {
    SimpleDateFormat format = new SimpleDateFormat("yyyy/MM/dd");
    Date time = new Date();
    String localTime = format.format(time);

    @Autowired
    private final UserRepository userRepository;

    @Transactional //회원기입 기능
    public void joinUser(UserVO userVo) {
        userVo.setUserPw(userVo.getUserPw());
        userVo.setUserAuth("USER");
        userVo.setRegDate(localTime);
        userVo.setUpdatedDate(localTime);
        userVo.setUserEmail(userVo.getUserEmail());
        userVo.setUserBirth(userVo.getUserBirth());
        userRepository.saveUser(userVo);
    }
}