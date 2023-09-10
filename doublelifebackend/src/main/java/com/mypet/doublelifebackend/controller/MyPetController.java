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


    // petByNo
    @GetMapping("/mypet/{petNo}")
    public MyPetVO getMypetByNo(@PathVariable int petNo){
        HashMap<String, Object> map = new HashMap<String, Object>();
        map.put("memId", "test");
        map.put("petNo", petNo);

        return myPetService.getMyPetByNo(map);
    }

    // petImgByNo
    @GetMapping("/mypet/image/{petNo}")
    public int getMypetImgByNo(@PathVariable int petNo) {
        if (petNo == 0){
            return 0;
        }
        HashMap<String, Object> map = new HashMap<String, Object>();
        map.put("memId", "test");
        map.put("petNo", petNo);

        return myPetService.getMyPetImgByNo(map);
    }


    // petNoList
    @GetMapping("/mypet/List")
    public List<Integer> getMypetNoList(){
        return myPetService.getAllMyPetNo("test");
    }


    // 새로운 pet 추가
    @PostMapping("/mypet/insert")
    public String addpet(@RequestPart("petNo") String petNo,
                         @RequestPart("petName") String petName,
                         @RequestPart("petGender") String petGender,
                         @RequestPart("petBirth") String petBirth,
                         @RequestPart("petIntro") String petIntro,
                         MyPetVO new_myPet) throws IOException {

        // 이미 있는 pet일 경우
        if(!petNo.equals("0")){

            HashMap<String, Object> map = new HashMap<String, Object>();
            map.put("memId", "test");
            map.put("petNo", Integer.parseInt(petNo));

            MyPetVO update_myPet = new MyPetVO(
                    "test",
                    Integer.parseInt(petNo),
                    petName,
                    petGender,
                    petBirth,
                    petIntro,
                    myPetService.getMyPetImgByNo(map)
            );

            String msg = updatepet(update_myPet);

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
    public String updatepet(MyPetVO update_myPet) {


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
