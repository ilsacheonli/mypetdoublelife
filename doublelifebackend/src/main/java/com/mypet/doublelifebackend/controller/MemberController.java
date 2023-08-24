package com.mypet.doublelifebackend.controller;

import com.mypet.doublelifebackend.service.MemberService;
import com.mypet.doublelifebackend.vo.MemberVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.Map;
import java.util.Objects;

@Controller
public class MemberController {
    @Autowired
    private MemberService memberService;
    @Autowired
    MemberVO memberVO ;


    // 로그인 페이지
    @RequestMapping(value = "/signin", method = RequestMethod.GET)
    public String signin(Model model) {

        return "SignIn";
        // resources/templates/SignIn.html
    }

    // 회원 가입 페이지
    @RequestMapping(value = "/signup", method = RequestMethod.GET)
    public String signup(Model model){

        return "SignUp";
        // resources/templates/SignUp.html
    }

    // 회원 페이지
    @RequestMapping(value = "/mypage", method = RequestMethod.GET)
    public String mypage(HttpServletRequest request, Model model) {

        // 세션에 member Object 여부 확인
        HttpSession session = request.getSession();
        Object memberObject = session.getAttribute("member");

        if (memberObject == null){
            // 로그인 x면 signin 페이지로 return
            return "redirect:/signin?NotLogin";
        }

        model.addAttribute("member",memberObject);

        return "MyPage";
        // resources/templates/MyPage.html
    }

    // 회원 정보 수정 페이지
    @RequestMapping(value = "/mypage/update", method = RequestMethod.GET)
    public String mypageupdate(HttpServletRequest request, Model model){
        // 세션에 member Object 여부 확인
        HttpSession session = request.getSession();
        Object memberObject = session.getAttribute("member");

        if (memberObject == null){
            // 로그인 x면 signin 페이지로 return
            return "redirect:/signin?NotLogin";
        }

        model.addAttribute("member",memberObject);

        return "MyPageUpdate";
        // resources/templates/SignUp.html
    }



    // 로그인
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public String login(@RequestParam("id") String id, @RequestParam("pwd") String pwd,
                        HttpServletRequest request, Model model){

        MemberVO member = memberService.getMemberByLogin(id, pwd);

        // 로그인 실패
        if(member == null){

            // 다시 로그인 페이지 return
            return "redirect:/signin?loginFail";
        }

        HttpSession session = request.getSession();
        session.setAttribute("member", member);

        // 마이 페이지로 return
        return "redirect:mypage";
    }

    // 새로운 멤버 추가
    @RequestMapping(value = "/addmember", method = RequestMethod.POST)
    public String addmember(@RequestParam Map<String, Objects> paramObj, MemberVO new_Member){

        // 마지막 멤버 번호 getLastMemNumber() 함수 호출
        int lastMemNumber = memberService.getLastMemNumber();

        // 새로운 멤버 MemberVO() 생성자로 생성
        new_Member = new MemberVO(
                lastMemNumber,           // "number"
                String.valueOf(paramObj.get("name")),
                String.valueOf(paramObj.get("id")),
                String.valueOf(paramObj.get("pwd")),
                String.valueOf(paramObj.get("email"))
                );

        // 새로운 멤버 MemberVO 인자로 멤버 추가 addMember() 함수 호출
        int Member_number = memberService.addMember(new_Member);

        // DB 멤버 번호 조회로 추가한 멤버가 있는지 확인하기 위한 변수 처리
        MemberVO addedMember = memberService.getMemberByNum(Member_number);

        // 회원가입 실패
        if(String.valueOf(addedMember).equals("null")){

            // 다시 회원가입 페이지로  return
            return "redirect:/signup?signUpFail";
        }

        // 회원가입 성공 로그인 페이지로 return
        return "redirect:/signin?signUpSuccess";
    }

    // 멤버 정보 수정
    @RequestMapping(value = "/updatemember", method = RequestMethod.POST)
    public String updatemember(@RequestParam Map<String, Objects> paramObj, MemberVO update_Member,
                               HttpServletRequest request){

        // number object -> int형으로
        int number = Integer.parseInt(String.valueOf(paramObj.get("number")));

        // 수정한 멤버 정보 MemberVO() 생성자로 생성
        update_Member = new MemberVO(
                number,                   //"number"
                String.valueOf(paramObj.get("name")),
                String.valueOf(paramObj.get("id")),
                String.valueOf(paramObj.get("pwd")),
                String.valueOf(paramObj.get("email"))
        );


        // 수정한 멤버 MemberVO 인자로 멤버 수정 editMember() 함수 호출
        int Member_number = memberService.editMember(update_Member);

        // DB 멤버 번호 조회로 추가한 멤버가 있는지 확인하기 위한 변수 처리
        MemberVO updatedMember = memberService.getMemberByNum(Member_number);

        // 회원 정보 수정 실패
        if(String.valueOf(updatedMember).equals("null")){

            // 다시 mypage로 return
            return "redirect:/mypage?updateFail";
        }

        // 회원 정보 수정 성공
        // 기존 member 세션 삭제
        HttpSession session = request.getSession();
        session.removeAttribute("member");

        // 수정한 member memNumber로 불러온 후 세션에 추가
        session.setAttribute("member",updatedMember);

        // mypage로 return
        return "redirect:/mypage?updateSuccess";
    }




}
