package com.mypet.doublelifebackend.controller;

import com.mypet.doublelifebackend.service.ImageService;
import com.mypet.doublelifebackend.service.MyPetService;
import com.mypet.doublelifebackend.vo.MemberVO;
import com.mypet.doublelifebackend.vo.MyPetVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.*;

@Controller
public class MyPetController {
    @Autowired
    private ImageService imageService;
    @Autowired
    private MyPetService myPetService;


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
    @RequestMapping(value = "/mypet/update", method = RequestMethod.GET)
    public String mypetupdate(@RequestParam("petNo") int petNo, HttpServletRequest request, Model model){

        HttpSession session = request.getSession();
        Object memberObject = session.getAttribute("member");

        if (memberObject == null) {
            return "redirect:/signin?NotLogin";

        }

        MemberVO sessionMem = (MemberVO) memberObject;

        HashMap<String, Object> map = new HashMap<String, Object>();
        map.put("memId", sessionMem.getMemId());
        map.put("petNo", petNo);

        model.addAttribute("pet", myPetService.getMyPetByName(map));

        return "MyPet/MyPetUpdate";
        // resources/templates/MyPet/MyPetInsert.html
    }



    // 새로운 pet 추가
    @RequestMapping(value = "/addpet", method = RequestMethod.POST)
    public String addpet(@RequestParam Map<String, Objects> paramObj,
                         @RequestParam("image") MultipartFile imageFile,
                         MyPetVO new_myPet, HttpServletRequest request) throws IOException {

        int pet_lastNum = myPetService.getLastPetNumber();
        int insert_img_num = imageService.insertImage(imageFile);


        new_myPet = new MyPetVO(
                String.valueOf(paramObj.get("id")),
                pet_lastNum,
                String.valueOf(paramObj.get("name")),
                String.valueOf(paramObj.get("gender")),
                String.valueOf(paramObj.get("birth")),
                String.valueOf(paramObj.get("introduce")),
                insert_img_num
                );


        myPetService.addMyPet(new_myPet);

        HashMap<String, Object> map = new HashMap<String, Object>();
        map.put("memId", new_myPet.getMemId());
        map.put("petNo", new_myPet.getPetNo());


        MyPetVO added_myPet = myPetService.getMyPetByName(map);

        if(String.valueOf(added_myPet).equals("null")){

            imageService.deleteImage(insert_img_num);
            return "redirect:/mypet?addPetFail";
        }

        return "redirect:/mypet?addPetSuccess";
    }

    // pet 정보 수정
    @RequestMapping(value = "/updatepet", method = RequestMethod.POST)
    public String updatepet(@RequestParam Map<String, Objects> paramObj,
                            @RequestParam("image") MultipartFile imageFile,
                            MyPetVO update_myPet) throws IOException {

        int update_img_num =  Integer.parseInt(String.valueOf(paramObj.get("imgNum")));

        update_myPet = new MyPetVO(
                String.valueOf(paramObj.get("id")),
                Integer.parseInt(String.valueOf(paramObj.get("petNo"))),
                String.valueOf(paramObj.get("name")),
                String.valueOf(paramObj.get("gender")),
                String.valueOf(paramObj.get("birth")),
                String.valueOf(paramObj.get("introduce")),
                update_img_num
        );


        myPetService.editMyPet(update_myPet);


        HashMap<String, Object> map = new HashMap<String, Object>();
        map.put("memId", update_myPet.getMemId());
        map.put("petNo", update_myPet.getPetNo());

        MyPetVO updated_myPet = myPetService.getMyPetByName(map);

        if(String.valueOf(updated_myPet).equals("null")){

            return "redirect:/mypet?updateFail";
        }


        int updated_image = imageService.updateImage(imageFile, update_img_num);

        if(updated_image == 0){

            return "redirect:/mypet?updateImgFail";
        }

        return "redirect:/mypet?updateSuccess";
    }

    // pet 삭제
    @RequestMapping(value = "/removepet", method = RequestMethod.POST)
    public String removepet(@RequestParam Map<String, Objects> paramObj, Model model) throws IOException {

        int del_mP_img = Integer.parseInt(String.valueOf(paramObj.get("imgNum")));

        HashMap<String, Object> map = new HashMap<String, Object>();
        map.put("memId", String.valueOf(paramObj.get("id")));
        map.put("petNo", Integer.parseInt(String.valueOf(paramObj.get("petNo"))));

        myPetService.removeMyPet(map);

        MyPetVO deleted_myPet = myPetService.getMyPetByName(map);

        if(!String.valueOf(deleted_myPet).equals("null")){

            return "redirect:/mypet?deleteFail";
        }

        if(imageService.deleteImage(del_mP_img)!=del_mP_img){

            return "redirect:/mypet?deleteImgFail";
        }

        return "redirect:/mypet?deleteSuccess";
    }



}
