package com.mypet.doublelifebackend.controller;

import com.mypet.doublelifebackend.service.ImageService;
import com.mypet.doublelifebackend.service.MyPetService;
import com.mypet.doublelifebackend.vo.MyPetVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.io.IOException;
import java.util.*;

@RestController
public class MyPetController {
    @Autowired
    private MyPetService myPetService;
    @Autowired
    private ImageService imageService;



    // pet 페이지
    @GetMapping("/mypet")
    public List<MyPetVO> mypet(){
        return myPetService.getAllMyPets("test");
    }

    // 새로운 pet 추가
    @PostMapping("/mypet/insert")
    public String addpet(@RequestPart("petName") String petName,
                         @RequestPart("petGender") String petGender,
                         @RequestPart("petBirth") String petBirth,
                         @RequestPart("petIntro") String petIntro,
                         MyPetVO new_myPet) throws IOException {
        
        // petName이 동일한 pet 확인
        HashMap<String, Object> pName_ck_map = new HashMap<String, Object>();
        pName_ck_map.put("memId", "test");
        pName_ck_map.put("petName", petName);

        MyPetVO checked_myPet = myPetService.getMyPetByName(pName_ck_map);

        if(!String.valueOf(checked_myPet).equals("null")){
            String msg = updatepet(checked_myPet, petGender, petBirth, petIntro);

            if(msg.equals("mypet?updateFail")){
                try {
                    // throw로 강제 예외 발생
                    throw new Exception("마이펫 수정 실패");
                } catch (Exception e)    {
                    System.out.println("ERROR : " + e.getMessage());
                    e.printStackTrace();
                }
            }

            return "mypet?petUpdate";
        }


        // 펫 추가
        int pet_lastNum = myPetService.getLastPetNumber();
        int insert_img_num = imageService.insertDefaultImg();


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


        MyPetVO added_myPet = myPetService.getMyPetByNo(map);

        if(String.valueOf(added_myPet).equals("null")){

            imageService.deleteImage(insert_img_num);

            return "mypet?petAddFail";
        }

        return "mypet?petAddSuccess";
    }


    // pet 정보 수정
    //@PostMapping("/mypet/update")
    public String updatepet(MyPetVO checked_myPet,
                            String petGender,String petBirth,String petIntro) {

        MyPetVO update_myPet = new MyPetVO(
                checked_myPet.getMemId(),
                checked_myPet.getPetNo(),
                checked_myPet.getPetName(),
                petGender,
                petBirth,
                petIntro,
                checked_myPet.getImgNo()
        );

        myPetService.editMyPet(update_myPet);

        HashMap<String, Object> map = new HashMap<String, Object>();
        map.put("memId", update_myPet.getMemId());
        map.put("petNo", update_myPet.getPetNo());

        MyPetVO updated_myPet = myPetService.getMyPetByNo(map);

        if(String.valueOf(updated_myPet).equals("null")){

            return "mypet?updateFail";
        }

        return "mypet?updateSuccess";
    }

    // pet 삭제
    @GetMapping( "/mypet/remove")
    public String removepet(@RequestPart("pet") MyPetVO delete_myPet) throws IOException {

        int del_mP_img = delete_myPet.getImgNo();

        HashMap<String, Object> map = new HashMap<String, Object>();
        map.put("memId", delete_myPet.getMemId());
        map.put("petNo", delete_myPet.getPetNo());


        myPetService.removeMyPet(map);

        MyPetVO deleted_myPet = myPetService.getMyPetByNo(map);

        if(!String.valueOf(deleted_myPet).equals("null")){

            return "mypet?deleteFail";
        }

        if(imageService.deleteImage(del_mP_img)!=del_mP_img){

            return "mypet?deleteImgFail";
        }

        return "mypet?deleteSuccess";
    }



}
