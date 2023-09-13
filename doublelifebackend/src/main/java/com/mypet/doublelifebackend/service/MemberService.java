package com.mypet.doublelifebackend.service;

import com.mypet.doublelifebackend.repository.MemberRepository;
import com.mypet.doublelifebackend.vo.MemberVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;

@Service
public class MemberService {
    @Autowired
    MemberRepository memberRepository;

    // 회원가입
    public void signup(MemberVO memberVO) {
        memberRepository.signup(memberVO);
    }
    // 로그인
    public MemberVO signin(String id) {
        return memberRepository.signin(id);
    }
    // 로그아웃
    public void signout(HttpSession session) {
        session.invalidate();
    }
}