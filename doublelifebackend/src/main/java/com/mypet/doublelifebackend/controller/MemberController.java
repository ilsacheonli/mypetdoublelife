package com.mypet.doublelifebackend.controller;

import com.mypet.doublelifebackend.service.MemberService;
import com.mypet.doublelifebackend.vo.MemberVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Objects;

@Controller
public class MemberController {
    @Autowired
    private MemberService memberService;
    @Autowired
    MemberVO memberVO ;

    // 회원 페이지
    @RequestMapping(value = "/mypage", method = RequestMethod.POST)
    public String mypage(@RequestAttribute("member") MemberVO member, Model model) throws Exception {
        model.addAttribute("member",member);

        return "MemberView";
        // resources/templates/MemberView.html
    }

    // 회원 가입 페이지
    @RequestMapping(value = "/signup", method = RequestMethod.GET)
    public String signup(Model model) throws Exception {

        return "MemberInsert";
        // resources/templates/MemberInsert.html
    }

    // 새로운 멤버 추가
    @RequestMapping(value = "/addmember", method = RequestMethod.POST)
    public String addmember(@RequestParam Map<String, Objects> paramObj, Model model) throws Exception {

        // 마지막 멤버 번호 getLastMemNumber() 함수 호출
        int lastMemNumber = memberService.getLastMemNumber();

        // 새로운 멤버 MemberVO() 생성자로 생성
        MemberVO newMember = new MemberVO(
                lastMemNumber,           // "memNumber"
                String.valueOf(paramObj.get("memName")),
                String.valueOf(paramObj.get("memId")),
                String.valueOf(paramObj.get("memPwd")),
                String.valueOf(paramObj.get("memEmail"))
                );

        // 새로운 멤버 MemberVO 인자로 멤버 추가 addMember() 함수 호출
        int Member_number = memberService.addMember(newMember);

        // 추가된 멤버 번호로 해당 멤버 불러오는 getMemberByNum() 함수 호출
        MemberVO member = memberService.getMemberByNum(Member_number);

        // return 값으로 받은 멤버 변수 mypage로 전달
        return mypage(member,model);
    }


}
