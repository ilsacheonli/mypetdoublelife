package com.mypet.doublelifebackend.controller;

import com.mypet.doublelifebackend.service.ImageService;
import com.mypet.doublelifebackend.service.MemberService;
import com.mypet.doublelifebackend.service.MyPetService;
import com.mypet.doublelifebackend.vo.MemberVO;
import com.mypet.doublelifebackend.vo.MyPetVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class MemberController {
    @Autowired
    private MemberService memberService;
    @Autowired
    private MyPetService myPetService;
    @Autowired
    private ImageService imageService;
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

        return "MyPage/MyPage";
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

        return "MyPage/MyPageUpdate";
        // resources/templates/MyPageUpdate.html
    }

    // 로그인
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public String login(@RequestBody Map<String, String> loginData,
                        HttpServletRequest request, Model model) {

        String id = loginData.get("id");
        String pwd = loginData.get("pwd");

        MemberVO member = memberService.getMemberByLogin(id, pwd);

        if (member == null) {
            return "redirect:/login";
        }

        HttpSession session = request.getSession();
        session.setAttribute("member", member);

        return "redirect:/mypage";
    }

    // 로그아웃
    @RequestMapping(value = "/logout", method = RequestMethod.GET)
    public String logout(HttpServletRequest request){

        HttpSession session = request.getSession();
        session.invalidate();

        return "redirect:signin?logout";
    }

    // 새로운 멤버 추가
    @RequestMapping(value = "/addmember", method = RequestMethod.POST)
    public String addmember(@RequestParam Map<String, Objects> paramObj, MemberVO new_Member){

        int lastMemNumber = memberService.getLastMemNumber();

        new_Member = new MemberVO(
                lastMemNumber,
                String.valueOf(paramObj.get("name")),
                String.valueOf(paramObj.get("id")),
                String.valueOf(paramObj.get("pwd")),
                String.valueOf(paramObj.get("email")),
                String.valueOf(paramObj.get("birth"))
        );

        int Member_number = memberService.addMember(new_Member);

        MemberVO addedMember = memberService.getMemberByNum(Member_number);

        if(String.valueOf(addedMember).equals("null")){

            return "redirect:/signup?signUpFail";
        }

        return "redirect:/signin?signUpSuccess";
    }

    // 멤버 정보 수정
    @RequestMapping(value = "/updatemember", method = RequestMethod.POST)
    public String updatemember(@RequestParam Map<String, Objects> paramObj, MemberVO update_member,
                               HttpServletRequest request){

        int number = Integer.parseInt(String.valueOf(paramObj.get("number")));

        update_member = new MemberVO(
                number,
                String.valueOf(paramObj.get("name")),
                String.valueOf(paramObj.get("id")),
                String.valueOf(paramObj.get("pwd")),
                String.valueOf(paramObj.get("email")),
                String.valueOf(paramObj.get("birth"))
        );

        int Member_number = memberService.editMember(update_member);

        MemberVO updated_member = memberService.getMemberByNum(Member_number);

        if(String.valueOf(updated_member).equals("null")){

            return "redirect:/mypage?updateFail";
        }

        HttpSession session = request.getSession();
        session.removeAttribute("member");
        session.setAttribute("member",updated_member);

        return "redirect:/mypage?updateSuccess";
    }

    // 멤버 삭제
    @RequestMapping(value = "/removemember", method = RequestMethod.GET)
    public String removemember(HttpServletRequest request) throws IOException {

        HttpSession session = request.getSession();
        Object memberObject = session.getAttribute("member");

        if (memberObject == null){
            return "redirect:/signin?NotLogin";
        }

        MemberVO del_member = (MemberVO)memberObject;
        String del_m_id = del_member.getMemId();

        List<MyPetVO> del_petList = myPetService.getAllMyPets(del_m_id);

        if (del_petList != null){
            for (MyPetVO del_pet : del_petList){
                HashMap<String, Object> map = new HashMap<String, Object>();
                map.put("memId", del_pet.getMemId());
                map.put("petNo", del_pet.getPetNo());

                myPetService.removeMyPet(map);

                imageService.deleteImage(del_pet.getImgNo());
            }
        }

        memberService.removeMember(del_m_id);

        session.invalidate();

        return "redirect:/signin?deleteSuccess";
    }
}