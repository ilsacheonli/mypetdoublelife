package com.mypet.doublelifebackend.controller;

import com.mypet.doublelifebackend.service.MyPetService;
import com.mypet.doublelifebackend.vo.MemberVO;
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


    // pet 페이지
    @RequestMapping(value = "/mypet", method = RequestMethod.GET)
    public String mypet(HttpServletRequest request, Model model){

        HttpSession session = request.getSession();
        Object memberObject = session.getAttribute("member");

        if (memberObject == null){
            return "redirect:/signin?NotLogin";
        }

        model.addAttribute("member",memberObject);

        return "MyPet/MyPet";
        // resources/templates/MyPet/MyPet.html
    }

    // pet 추가 페이지
    @RequestMapping(value = "/mypet/insert", method = RequestMethod.GET)
    public String insert(HttpServletRequest request, Model model){

        HttpSession session = request.getSession();
        Object memberObject = session.getAttribute("member");

        if (memberObject == null){
            return "redirect:/signin?NotLogin";
        }

        model.addAttribute("member",memberObject);

        return "MyPet/MyPetInsert";
        // resources/templates/MyPet/MyPetInsert.html
    }

    // pet 정보 수정 페이지
    @RequestMapping(value = "/mypet/update", method = RequestMethod.GET)
    public String mypetupdate(HttpServletRequest request, Model model){

        HttpSession session = request.getSession();
        Object memberObject = session.getAttribute("member");
        Object petObject = session.getAttribute("pet");

        if (memberObject == null){
            return "redirect:/signin?NotLogin";
        } else if (petObject == null) {
            return "redirect:/mypet?petNull";
        }

        model.addAttribute("pet",petObject);

        return "MyPet/MyPetInsert";
        // resources/templates/MyPet/MyPetInsert.html
    }



    // 새로운 pet 추가
    @RequestMapping(value = "/addpet", method = RequestMethod.POST)
    public String addmember(@RequestParam Map<String, Objects> paramObj, MyPetVO new_myPet,
                            HttpServletRequest request){

        HttpSession session = request.getSession();
        Object memberObject = session.getAttribute("member");

        if (memberObject == null){
            return "redirect:/signin?NotLogin";
        }


        new_myPet = new MyPetVO(
                String.valueOf(paramObj.get("id")),
                String.valueOf(paramObj.get("name")),
                String.valueOf(paramObj.get("gender")),
                String.valueOf(paramObj.get("introduce"))
                );

        myPetService.addMyPet(new_myPet);

        return "redirect:/mypet?addPetSuccess";
    }

    // pet 정보 수정
    @RequestMapping(value = "/updatepet", method = RequestMethod.POST)
    public String updatemember(@RequestParam Map<String, Objects> paramObj, MyPetVO update_myPet,
                               HttpServletRequest request){

        update_myPet = new MyPetVO(
                String.valueOf(paramObj.get("id")),
                String.valueOf(paramObj.get("name")),
                String.valueOf(paramObj.get("gender")),
                String.valueOf(paramObj.get("introduce"))
        );

        myPetService.editMyPet(update_myPet);

        String up_mP_memId = update_myPet.getMemId();
        String up_mP_Name = update_myPet.getPetName();

        MyPetVO updated_myPet = myPetService.getMyPetByName(up_mP_memId, up_mP_Name);

        if(String.valueOf(updated_myPet).equals("null")){

            return "redirect:/mypet?updateFail";
        }

        return "redirect:/mypet?updateSuccess";
    }

    // pet 삭제
    @RequestMapping(value = "/removepet", method = RequestMethod.GET)
    public String removepet(HttpServletRequest request, MyPetVO delete_pet){

        HttpSession session = request.getSession();
        Object memberObject = session.getAttribute("member");

        if (memberObject == null){

            return "redirect:/signin?NotLogin";
        }


        String del_m_id = delete_pet.getMemId();

        request.removeAttribute("member");


        return "redirect:/signin?deleteSuccess";
    }



}
