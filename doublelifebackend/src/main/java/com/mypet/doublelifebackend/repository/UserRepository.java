package com.mypet.doublelifebackend.repository;

import com.mypet.doublelifebackend.vo.UserVO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserRepository {
    // 로그인
    UserVO getUserAccount(String userId);

    // 회원가입
    void saveUser(UserVO userVo);

    // 아이디 중복체크
    boolean isIdcheck(String userId);
}
