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
import java.util.*;

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

        MemberVO member = (MemberVO)memberObject;

        model.addAttribute("petList",myPetService.getAllMyPets(member.getMemId()));

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
    @RequestMapping(value = "/mypet/update", method = RequestMethod.POST)
    public String mypetupdate(@RequestParam Map<String, Objects> paramObj, HttpServletRequest request, Model model){

        HttpSession session = request.getSession();
        Object memberObject = session.getAttribute("member");

        if (memberObject == null) {
            return "redirect:/signin?NotLogin";

        }

        String memId = String.valueOf(paramObj.get("id"));
        String petName = String.valueOf(paramObj.get("name"));

        model.addAttribute("pet", myPetService.getMyPetByName(memId,petName));

        return "MyPet/MyPetUpdate";
        // resources/templates/MyPet/MyPetInsert.html
    }



    // 새로운 pet 추가
    @RequestMapping(value = "/addpet", method = RequestMethod.POST)
    public String addpet(@RequestParam Map<String, Objects> paramObj, MyPetVO new_myPet,
                            HttpServletRequest request){


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
    public String updatepet(@RequestParam Map<String, Objects> paramObj, MyPetVO update_myPet,
                               Model model){

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

        model.addAttribute("pet",updated_myPet);

        return "redirect:/mypet?updateSuccess";
    }

    // pet 삭제
    @RequestMapping(value = "/removepet", method = RequestMethod.POST)
    public String removepet(@RequestParam Map<String, Objects> paramObj, MyPetVO delete_pet, Model model){

        String del_mP_memId = String.valueOf(paramObj.get("id"));
        String del_mP_Name = String.valueOf(paramObj.get("name"));

        myPetService.removeMyPet(del_mP_memId, del_mP_Name);

        MyPetVO deleted_myPet = myPetService.getMyPetByName(del_mP_memId, del_mP_Name);

        if(!String.valueOf(deleted_myPet).equals("null")){

            return "redirect:/mypet?deleteFail";
        }


        return "redirect:/mypet?deleteSuccess";
    }



}
