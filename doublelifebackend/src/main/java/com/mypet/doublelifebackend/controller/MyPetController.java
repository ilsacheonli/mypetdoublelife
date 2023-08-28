package com.mypet.doublelifebackend.controller;

import com.mypet.doublelifebackend.service.MyPetService;
import com.mypet.doublelifebackend.vo.MyPetVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.Map;
import java.util.Objects;

@Controller
public class MyPetController {
    @Autowired
    private MyPetService myPetService;
    @Autowired
    MyPetVO myPetVO ;


    //
    @RequestMapping(value = "/signup", method = RequestMethod.GET)
    public String signup(Model model){

        return "SignUp";
        //
    }

    // 회원 페이지
    @RequestMapping(value = "/mypage", method = RequestMethod.GET)
    public String mypage(HttpServletRequest request, Model model) {

        HttpSession session = request.getSession();
        Object memberObject = session.getAttribute("member");

        if (memberObject == null){
            return "redirect:/signin?NotLogin";
        }

        model.addAttribute("member",memberObject);

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

        model.addAttribute("member",memberObject);

        return "MyPage/MyPageUpdate";

    }




    // 새로운 멤버 추가
    @RequestMapping(value = "/addmember", method = RequestMethod.POST)
    public String addmember(@RequestParam Map<String, Objects> paramObj, MyPetVO new_MyPet){

        new_MyPet = new MyPetVO(
                String.valueOf(paramObj.get("name")),
                String.valueOf(paramObj.get("id")),
                String.valueOf(paramObj.get("pwd")),
                String.valueOf(paramObj.get("email"))
                );


//        if(String.valueOf().equals("null")){
//
//
//            return "redirect:/signup?signUpFail";
//        }


        return "redirect:/signin?signUpSuccess";
    }

    //
    @RequestMapping(value = "/updatemember", method = RequestMethod.POST)
    public String updatemember(@RequestParam Map<String, Objects> paramObj, MyPetVO update_MyPet,
                               HttpServletRequest request){


        update_MyPet = new MyPetVO(
                String.valueOf(paramObj.get("name")),
                String.valueOf(paramObj.get("id")),
                String.valueOf(paramObj.get("pwd")),
                String.valueOf(paramObj.get("email"))
        );


        int MyPet_number = myPetService.editMyPet(update_MyPet);


        MyPetVO updatedMyPet = myPetService.getMyPetByNum(MyPet_number);


        if(String.valueOf(updatedMyPet).equals("null")){

            return "redirect:/mypage?updateFail";
        }


        HttpSession session = request.getSession();
        session.removeAttribute("member");


        session.setAttribute("member",updatedMyPet);


        return "redirect:/mypage?updateSuccess";
    }




}
