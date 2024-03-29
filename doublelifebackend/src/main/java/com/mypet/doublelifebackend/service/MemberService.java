package com.mypet.doublelifebackend.service;

import com.mypet.doublelifebackend.vo.MemberVO;
import com.mypet.doublelifebackend.repository.MemberRepository;
import org.apache.ibatis.exceptions.TooManyResultsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.TooManyListenersException;

@Service
public class MemberService{     // sql문과 연결된 MemberRepository 함수 호출
    @Autowired
    private MemberRepository memberRepository;

    public MemberVO getMemberByNum(int memNumber) {
        try {
            // selectMemberByNum() 호출 후 해당 member return
            return memberRepository.selectMemberByNum(memNumber);
        } catch (TooManyResultsException e) {
            e.printStackTrace();
            return null;
        }
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

    public void removeMember(String memId){

        // deleteMember()함수 호출
        memberRepository.deleteMember(memId);
    }

    public void removeAllPet(String memId){

        // deleteMember()함수 호출
        memberRepository.deleteAllMyPet(memId);
    }


    public int getLastMemNumber(){

        // getLastNumber()함수 호출 후 memNumber return
        return memberRepository.getLastNumber();
    }

    public boolean isMemberIdDuplicate(String memId) {
        MemberVO existingMember = memberRepository.selectMemberById(memId);
        return existingMember != null;
    }
}