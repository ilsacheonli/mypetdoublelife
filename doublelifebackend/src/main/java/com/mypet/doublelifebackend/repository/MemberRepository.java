package com.mypet.doublelifebackend.repository;

import com.mypet.doublelifebackend.vo.MemberVO;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository {
    // 회원가입
    void signup(MemberVO memberVO);
    // 로그인
    MemberVO signin(String id);

}