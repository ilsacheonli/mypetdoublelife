package com.mypet.doublelifebackend.service;

import com.mypet.doublelifebackend.vo.MemberVO;
import com.mypet.doublelifebackend.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MemberService{     // sql문과 연결된 MemberRepository 함수 호출
    @Autowired
    private MemberRepository memberRepository;

    public MemberVO getMemberByNum(int memNumber) {

        // selectMemberByNum() 호출 후 해당 member return
        return memberRepository.selectMemberByNum(memNumber);
    }

    public MemberVO getMemberByLogin(String id, String pwd) {

        // selectMemberByLogin() 호출 후 해당 member return
        return memberRepository.selectMemberByLogin(id, pwd);
    }



    public List<MemberVO> getAllMembers() {

        // selectAllMembers() 호출 후 member list return
        return memberRepository.selectAllMembers();
    }



    public int addMember(MemberVO member) {

        // insertMember()함수 호출 후 추가한 memNumber return
        memberRepository.insertMember(member);
        return member.getMemNumber();
    }

    public int editMember(MemberVO member) {

        // updateMember()함수 호출 후 수정한 memNumber return
        memberRepository.updateMember(member);
        return member.getMemNumber();
    }


    
    public int getLastMemNumber(){

        // getLastNumber()함수 호출 후 memNumber return
        return memberRepository.getLastNumber();
    }
}
