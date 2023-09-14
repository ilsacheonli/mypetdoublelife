package com.mypet.doublelifebackend.controller;

import com.mypet.doublelifebackend.service.ImageService;
import com.mypet.doublelifebackend.service.MyFeedService;
import com.mypet.doublelifebackend.vo.BoardVO;
import com.mypet.doublelifebackend.vo.MemberVO;
import com.mypet.doublelifebackend.vo.MyFeedVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;

@RestController
public class MyFeedController {
    @Autowired
    private MyFeedService myFeedService;
    @Autowired
    private ImageService imageService;


    @GetMapping("/myfeed")
    public List<MyFeedVO> myFeed(HttpServletRequest request){
        HttpSession session = request.getSession();
        MemberVO login_member = (MemberVO) session.getAttribute("member");

        if(login_member == null){
            try {
                // throw로 강제 예외 발생
                throw new Exception("로그인 확인필요");
            } catch (Exception e) {
                System.out.println("ERROR : " + e.getMessage());
                e.printStackTrace();
            }
        }

        return myFeedService.getAllMyFeed(login_member.getMemId());
    }

    // feedByNo
    @GetMapping("/myfeed/{feedNo}")
    public MyFeedVO getMyFeedByNo(@PathVariable String feedNo){
        return myFeedService.getMyFeedByNo(Integer.parseInt(feedNo));
    }

    @PostMapping("/myfeed/insert")
    public String myFeedInsert( @RequestPart("petName") String petName,
                                @RequestPart("feedTitle") String feedTitle,
                                @RequestPart("feedContent") String feedContent,
                                @RequestPart("image")MultipartFile image,
                                HttpServletRequest request,
                                MyFeedVO new_myFeed) throws IOException {

        HttpSession session = request.getSession();
        MemberVO login_member = (MemberVO) session.getAttribute("member");

        if(login_member == null){
            try {
                // throw로 강제 예외 발생
                throw new Exception("로그인 확인필요");
            } catch (Exception e) {
                System.out.println("ERROR : " + e.getMessage());
                e.printStackTrace();
            }
        }


        int feedNo = myFeedService.getLastFeedNumber();
        int imgNo = imageService.insertImage(image, "feed");


        new_myFeed = new MyFeedVO(
                login_member.getMemId(), /*memId*/
                petName,
                feedNo,
                feedTitle,
                feedContent,
                imgNo
                );

        myFeedService.addMyFeed(new_myFeed);

        MyFeedVO added_myFeed = myFeedService.getMyFeedByNo(new_myFeed.getFeedNo());

        if(String.valueOf(added_myFeed).equals("null")){
            try {
                // throw로 강제 예외 발생
                throw new Exception("마이피드가 추가 실패");
            } catch (Exception e) {
                System.out.println("ERROR : " + e.getMessage());
                e.printStackTrace();
            }

        }

        return "MyFeed?insertSuccess";


    }

    @PostMapping("/myfeed/update/{feedNo}")
    public String myFeedUpdate( @PathVariable("feedNo") int feedNo,
                                @RequestPart("petName") String petName,
                                @RequestPart("feedTitle") String feedTitle,
                                @RequestPart("feedContent") String feedContent,
                                @RequestPart(value = "image", required = false) MultipartFile image,
                                HttpServletRequest request,
                                MyFeedVO update_myFeed) throws IOException {

        HttpSession session = request.getSession();
        MemberVO login_member = (MemberVO) session.getAttribute("member");

        if(login_member == null){
            try {
                // throw로 강제 예외 발생
                throw new Exception("로그인 확인필요");
            } catch (Exception e) {
                System.out.println("ERROR : " + e.getMessage());
                e.printStackTrace();
            }
        }

        MyFeedVO db_MyFeed =  myFeedService.getMyFeedByNo(feedNo);
        int imgNo = db_MyFeed.getImgNo();

        MultipartFile getImage = null;

        if (!(image==null)){
            getImage = image;
        }


        update_myFeed = new MyFeedVO(
                "test" /*memId*/,
                petName,
                feedNo,
                feedTitle,
                feedContent,
                imgNo
        );

        myFeedService.editMyFeed(update_myFeed);

        MyFeedVO updated_myFeed = myFeedService.getMyFeedByNo(update_myFeed.getFeedNo());

        if(String.valueOf(updated_myFeed).equals("null")){
            try {
                // throw로 강제 예외 발생
                throw new Exception("마이 피드 수정 실패");
            } catch (Exception e) {
                System.out.println("ERROR : " + e.getMessage());
                e.printStackTrace();
            }

        }

        if (!(getImage==null)){
            imageService.updateImage(image, imgNo, "feed");
        }



        return "myfeed?updateSuccess";
    }

    @PostMapping("/myfeed/delete/{feedNo}")
    public String myFeedDelete( @PathVariable("feedNo") int feedNo,MyFeedVO delete_myFeed,
                                HttpServletRequest request) throws IOException {

        HttpSession session = request.getSession();
        MemberVO login_member = (MemberVO) session.getAttribute("member");

        if(login_member == null){
            try {
                // throw로 강제 예외 발생
                throw new Exception("로그인 확인필요");
            } catch (Exception e) {
                System.out.println("ERROR : " + e.getMessage());
                e.printStackTrace();
            }
        }

        delete_myFeed = myFeedService.getMyFeedByNo(feedNo);
        int del_imgNo = delete_myFeed.getImgNo();

        myFeedService.removeMyFeed(feedNo);

        MyFeedVO deleted_myFeed = myFeedService.getMyFeedByNo(feedNo);

        if(!String.valueOf(deleted_myFeed).equals("null")){
            try {
                // throw로 강제 예외 발생
                throw new Exception("마이 피드 삭제 실패");
            } catch (Exception e) {
                System.out.println("ERROR : " + e.getMessage());
                e.printStackTrace();
            }

        }

        imageService.deleteImage(del_imgNo);

        return "myfeed?deleteSuccess";
    }









}
