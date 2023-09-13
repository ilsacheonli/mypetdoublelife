package com.mypet.doublelifebackend.controller;

import com.mypet.doublelifebackend.service.ImageService;
import com.mypet.doublelifebackend.service.MemberService;
import com.mypet.doublelifebackend.service.MyPetService;
import com.mypet.doublelifebackend.vo.BoardVO;
import com.mypet.doublelifebackend.vo.MemberVO;
import com.mypet.doublelifebackend.vo.MyPetVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class MemberController {
    @Autowired
    private MemberService memberService;
    @Autowired
    private MyPetService myPetService;
    @Autowired
    private ImageService imageService;

    // 로그인 페이지
    @RequestMapping(value = "/signin", method = RequestMethod.GET)
    public String signin(Model model) {
        return "SignIn";
    }

    // 회원 가입 페이지
    @RequestMapping(value = "/signup", method = RequestMethod.GET)
    public String signup(Model model){
        return "SignUp";
    }

    // 회원 페이지
    @RequestMapping(value = "/mypage", method = RequestMethod.GET)
    public String mypage(HttpServletRequest request, Model model) {
        HttpSession session = request.getSession();
        Object memberObject = session.getAttribute("member");

        if (memberObject == null){
            return "redirect:/signin?NotLogin";
        }

        model.addAttribute("member", memberObject);

        return "MyPage/MyPage";
    }

    // 회원 정보 수정 페이지
    @RequestMapping(value = "/mypage/update", method = RequestMethod.GET)
    public String mypageupdate(HttpServletRequest request, Model model){
        HttpSession session = request.getSession();
        Object memberObject = session.getAttribute("member");

        if (memberObject == null){
            return "redirect:/signin?NotLogin";
        }

        model.addAttribute("member", memberObject);

        return "MyPage/MyPageUpdate";
    }
    /////////////////////////////////////////////////////////////////////////


    // 로그인 체크
    @GetMapping("/loginCheck")
    public Boolean loginCehck(HttpServletRequest request){
        HttpSession session = request.getSession();
        Object member = session.getAttribute("member");

        return member != null;
    }

    // 로그인
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public String login(@RequestBody Map<String, String> loginData,
                        HttpServletRequest request, Model model) {
        String id = loginData.get("id");
        String pwd = loginData.get("pwd");

        MemberVO member = memberService.getMemberByLogin(id, pwd);

        if (member == null) {
            id = "이건잘못된것";
            return "id";
        }

        HttpSession session = request.getSession();
        session.setAttribute("member", member);

        return id;
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
    public String addmember(@RequestBody MemberVO new_Member) {
        int lastMemNumber = memberService.getLastMemNumber();

        int Member_number = memberService.addMember(new_Member);

        MemberVO addedMember = memberService.getMemberByNum(Member_number);

        if (addedMember == null) {
            return "redirect:/signup?signUpFail";
        }

        return "redirect:/signin?signUpSuccess";
    }

    // 멤버 정보 수정
    @RequestMapping(value = "/updatemember", method = RequestMethod.POST)
    public String updatemember(@RequestParam Map<String, Objects> paramObj, MemberVO update_member,
                               HttpServletRequest request){
        int number = Integer.parseInt(String.valueOf(paramObj.get("number")));

        String birthString = String.valueOf(paramObj.get("birth"));
        Date birthDate = null;

        // 문자열을 Date로 변환
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        try {
            birthDate = dateFormat.parse(birthString);
        } catch (ParseException e) {
            e.printStackTrace();
        }

        update_member = new MemberVO(
                number,
                String.valueOf(paramObj.get("name")),
                String.valueOf(paramObj.get("id")),
                String.valueOf(paramObj.get("pwd")),
                String.valueOf(paramObj.get("email")),
                birthDate
        );

        int Member_number = memberService.editMember(update_member);

        MemberVO updated_member = memberService.getMemberByNum(Member_number);

        if(updated_member == null){
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
                myPetService.removeMyPet(del_pet.getPetNo());

                imageService.deleteImage(del_pet.getImgNo());
            }
        }

        memberService.removeMember(del_m_id);

        session.invalidate();

        return "redirect:/signin?deleteSuccess";
    }

    // 중복 아이디 체크
    @RequestMapping(value = "/checkDuplicateID", method = RequestMethod.POST)
    public ResponseEntity<Boolean> checkDuplicateID(@RequestBody Map<String, String> requestBody) {
        String memId = requestBody.get("memId");
        boolean isDuplicate = memberService.isMemberIdDuplicate(memId);
        return new ResponseEntity<>(isDuplicate, HttpStatus.OK);
    }
}