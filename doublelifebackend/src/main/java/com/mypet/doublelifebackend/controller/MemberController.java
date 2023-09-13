package com.mypet.doublelifebackend.controller;

import com.mypet.doublelifebackend.service.MemberService;
import com.mypet.doublelifebackend.vo.MemberVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Controller
public class MemberController {

    @Autowired
    MemberService memberService;

    // 회원가입 페이지로 이동
    @GetMapping("/signUp")
    public String signup() {
        return "signUp";
    }

    // 회원가입
    @PostMapping("/signUp")
    public String signup(MemberVO memberVO) {
        System.out.println("memberVO = " + memberVO);
        memberService.signup(memberVO);
        return "redirect:/signIn";
    }

    // 로그인 페이지로 이동
    @GetMapping("/signIn")
    public String signip() {
        return "signIn";
    }

    // 로그인
    @PostMapping("/signIn")
    public String signin(MemberVO memberVO, HttpServletRequest request, RedirectAttributes redirectAttributes) {
        System.out.println("로그인 memberVO = " + memberVO);
        // 세션 생성
        HttpSession session = request.getSession();

        // id를 맞게 입력하면 originMember에 id, password 값이 저장됨
        MemberVO originMember = memberService.signin(memberVO.getId());
        // password
        String originPassword = originMember.getPassword();


        // 로그인 성공 시 세션에 멤버vo 정보를 저장
        if (originMember != null && originPassword.equals(memberVO.getPassword())) {
            // 세션에 member 속성값을 세팅
            session.setAttribute("member", originMember);

            return "/PetMunity/petmunity";
        }
        else { // 로그인 실패 시
            // 세션에 member 속성값을 null로 세팅
            session.setAttribute("member", null);

            redirectAttributes.addFlashAttribute("msg", false);
            return "redirect:/signIn";
        }
    }

    // 로그아웃
    @GetMapping("/signOut")
    public String signout(HttpSession session) {
        memberService.signout(session);
        return "nav";
    }
}