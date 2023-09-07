package com.mypet.doublelifebackend.controller;

import com.mypet.doublelifebackend.service.ImageService;
import com.mypet.doublelifebackend.service.MyPetService;
import com.mypet.doublelifebackend.vo.MemberVO;
import com.mypet.doublelifebackend.vo.MyPetVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.*;

@RestController
public class MyPetController {
    @Autowired
    private ImageService imageService;
    @Autowired
    private MyPetService myPetService;


    // pet 페이지
    @GetMapping("/mypet")
    public List<MyPetVO> mypet(HttpServletRequest request, Model model){

//        HttpSession session = request.getSession();
//        Object memberObject = session.getAttribute("member");
//
//        if (memberObject == null){
//            return "redirect:/signin?NotLogin";
//        }

//        MemberVO member = (MemberVO)memberObject;

       // model.addAttribute("petList",myPetService.getAllMyPets("test"));

        return myPetService.getAllMyPets("test");
    }

    // pet 추가 페이지
//    @RequestMapping(value = "/mypet/insert", method = RequestMethod.GET)
//    public String insert(HttpServletRequest request, Model model){
//
//        HttpSession session = request.getSession();
//        Object memberObject = session.getAttribute("member");
//
//        if (memberObject == null){
//            return "redirect:/signin?NotLogin";
//        }
//
//        model.addAttribute("member",memberObject);
//
//        return "MyPet/MyPetInsert";
//        // resources/templates/MyPet/MyPetInsert.html
//    }

//    // pet 정보 수정 페이지
//    @RequestMapping(value = "/mypet/update", method = RequestMethod.GET)
//    public String mypetupdate(@RequestParam("petNo") int petNo, HttpServletRequest request, Model model){
//
//        HttpSession session = request.getSession();
//        Object memberObject = session.getAttribute("member");
//
//        if (memberObject == null) {
//            return "redirect:/signin?NotLogin";
//
//        }
//
//        MemberVO sessionMem = (MemberVO) memberObject;
//
//        HashMap<String, Object> map = new HashMap<String, Object>();
//        map.put("memId", sessionMem.getMemId());
//        map.put("petNo", petNo);
//
//        model.addAttribute("pet", myPetService.getMyPetByName(map));
//
//        return "MyPet/MyPetUpdate";
//        // resources/templates/MyPet/MyPetInsert.html
//    }



    // 새로운 pet 추가
    @PostMapping("/mypet/insert")
    public String addpet(@RequestPart("petName") String petName,
                         @RequestPart("petGender") String petGender,
                         @RequestPart("petBirth") String petBirth,
                         @RequestPart("petIntro") String petIntro,
                         MyPetVO new_myPet) throws IOException {

        int pet_lastNum = myPetService.getLastPetNumber();
        int insert_img_num = imageService.insertImage();


        new_myPet = new MyPetVO(
                "test",
                pet_lastNum,
                petName,
                petGender,
                petBirth,
                petIntro,
                insert_img_num
                );


        myPetService.addMyPet(new_myPet);

        HashMap<String, Object> map = new HashMap<String, Object>();
        map.put("memId", new_myPet.getMemId());
        map.put("petNo", new_myPet.getPetNo());


        MyPetVO added_myPet = myPetService.getMyPetByName(map);

        if(String.valueOf(added_myPet).equals("null")){

            imageService.deleteImage(insert_img_num);

            return "/mypet?petAddFail";
        }

        return "/mypet?petAddSuccess";
    }

    // pet 정보 수정
    @PostMapping("/mypet/update")
    public String updatepet(@RequestParam("pet") MyPetVO update_myPet) throws IOException {

        myPetService.editMyPet(update_myPet);

        HashMap<String, Object> map = new HashMap<String, Object>();
        map.put("memId", update_myPet.getMemId());
        map.put("petNo", update_myPet.getPetNo());

        MyPetVO updated_myPet = myPetService.getMyPetByName(map);

        if(String.valueOf(updated_myPet).equals("null")){

            return "/mypet?updateFail";
        }

        return "/mypet?updateSuccess";
    }

    // pet 삭제
    @GetMapping( "/mypet/remove")
    public String removepet(@RequestParam("pet") MyPetVO delete_myPet) throws IOException {

        int del_mP_img = delete_myPet.getImgNo();

        HashMap<String, Object> map = new HashMap<String, Object>();
        map.put("memId", delete_myPet.getMemId());
        map.put("petNo", delete_myPet.getPetNo());


        myPetService.removeMyPet(map);

        MyPetVO deleted_myPet = myPetService.getMyPetByName(map);

        if(!String.valueOf(deleted_myPet).equals("null")){

            return "/mypet?deleteFail";
        }

        if(imageService.deleteImage(del_mP_img)!=del_mP_img){

            return "/mypet?deleteImgFail";
        }

        return "/mypet?deleteSuccess";
    }



}
