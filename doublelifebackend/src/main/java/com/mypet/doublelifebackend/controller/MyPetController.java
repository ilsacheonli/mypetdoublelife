package com.mypet.doublelifebackend.controller;

import com.mypet.doublelifebackend.service.ImageService;
import com.mypet.doublelifebackend.service.MyPetService;
import com.mypet.doublelifebackend.vo.MemberVO;
import com.mypet.doublelifebackend.vo.MyPetVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class MyPetController {
    @Autowired
    private MyPetService myPetService;
    @Autowired
    private ImageService imageService;


    // petByNo
    @GetMapping("/mypet/{petNo}")
    public MyPetVO getMypetByNo(@PathVariable int petNo){

        return myPetService.getMyPetByNo(petNo);
    }

    // petImgByNo
    @GetMapping("/mypet/image/{petNo}")
    public int getMypetImgByNo(@PathVariable int petNo) {
        if (petNo == 0){
            return 0;
        }

        return myPetService.getMyPetImgByNo(petNo);
    }


    // petNoList
    @GetMapping("/mypet/List")
    public List<Integer> getMypetNoList(HttpServletRequest request){
        HttpSession session = request.getSession();
        MemberVO login_member = (MemberVO) session.getAttribute("member");

        if(login_member==null){
            try {
                // throw로 강제 예외 발생
                throw new Exception("로그인 확인필요");
            } catch (Exception e) {
                System.out.println("ERROR : " + e.getMessage());
                e.printStackTrace();
            }
        }

        return myPetService.getAllMyPetNo(login_member.getMemId());
    }


    // 새로운 pet 추가
    @PostMapping("/mypet/insert")
    public String addpet(@RequestPart("petNo") String petNo,
                         @RequestPart("petName") String petName,
                         @RequestPart("petGender") String petGender,
                         @RequestPart("petBirth") String petBirth,
                         @RequestPart("petIntro") String petIntro,
                         HttpServletRequest request,
                         MyPetVO new_myPet) throws IOException {

        HttpSession session = request.getSession();
        MemberVO login_member = (MemberVO) session.getAttribute("member");

        if(login_member==null){
            try {
                // throw로 강제 예외 발생
                throw new Exception("로그인 확인필요");
            } catch (Exception e) {
                System.out.println("ERROR : " + e.getMessage());
                e.printStackTrace();
            }
        }

        int new_mypet_No = Integer.parseInt(petNo);

        // 이미 있는 pet일 경우
        if(!petNo.equals("0")){

            MyPetVO update_myPet = new MyPetVO(
                    login_member.getMemId(),
                    Integer.parseInt(petNo),
                    petName,
                    petGender,
                    petBirth,
                    petIntro,
                    myPetService.getMyPetImgByNo(new_mypet_No)
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
        int lastNumber = myPetService.getLastPetNumber();
        int insert_img_num = imageService.insertDefaultImg();


        new_myPet = new MyPetVO(
                "test",
                lastNumber,
                petName,
                petGender,
                petBirth,
                petIntro,
                insert_img_num
                );


        myPetService.addMyPet(new_myPet);

        MyPetVO added_myPet = myPetService.getMyPetByNo(lastNumber);

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

        MyPetVO updated_myPet = myPetService.getMyPetByNo(update_myPet.getPetNo());

        if(String.valueOf(updated_myPet).equals("null")){

            return "mypet?updateFail";
        }

        return "mypet?updateSuccess";
    }

    // pet 삭제
    @PostMapping( "/mypet/remove/{petNo}")
    public String removepet(@PathVariable("petNo") int petNo) throws IOException {

        myPetService.removeMyPet(petNo);

        MyPetVO deleted_myPet = myPetService.getMyPetByNo(petNo);

        if(!String.valueOf(deleted_myPet).equals("null")){

            return "mypet?deleteFail";
        }

        int del_mpImg_Number = myPetService.getMyPetImgByNo(petNo);

        if(imageService.deleteImage(del_mpImg_Number)!=del_mpImg_Number){

            return "mypet?deleteImgFail";
        }

        return "mypet?deleteSuccess";
    }



}
