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


    public List<MemberVO> getAllMembers() {

        // selectAllMembers() 호출 후 member list return
        return memberRepository.selectAllMembers();
    }


    public int addMember(MemberVO member) {

        // insertMember()함수 호출 후 추가한 memNumber return
        memberRepository.insertMember(member);
        return member.getMemNumber();
    }


    public int getLastMemNumber(){

        // getLastNumber()함수 호출한 뒤 0, null 확인 후 마지막 memNumber return
        int lastNumber = memberRepository.getLastNumber();

        //마지막 memNumber = 0이거나 null이면 <- 아직 작동x
        if(lastNumber == 0 || (String.valueOf(lastNumber)).isEmpty())
            return 1;

        //else 아니면 마지막 memNumber + 1
        return lastNumber+1;
    }
}
