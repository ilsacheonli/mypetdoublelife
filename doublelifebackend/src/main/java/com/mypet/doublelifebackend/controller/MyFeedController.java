package com.mypet.doublelifebackend.controller;

import com.mypet.doublelifebackend.service.ImageService;
import com.mypet.doublelifebackend.service.MyFeedService;
import com.mypet.doublelifebackend.vo.BoardVO;
import com.mypet.doublelifebackend.vo.MyFeedVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
public class MyFeedController {
    @Autowired
    private MyFeedService myFeedService;
    @Autowired
    private ImageService imageService;


    @GetMapping("/myfeed")
    public List<MyFeedVO> myFeed(/*@RequestPart("memId")*/String memId){
        memId = "test";
        return myFeedService.getAllMyFeed(memId);
    }

    // feedByNo
    @GetMapping("/myfeed/{feedNo}")
    public MyFeedVO getMyFeedByNo(@PathVariable int feedNo){
        return myFeedService.getMyFeedByNo(feedNo);
    }

    @GetMapping("/myfeed/insert")
    public String myFeedInsertPage(){
        return "/myfeed/insert";
    }

    @GetMapping("/myfeed/update")
    public String myFeedUpdatePage(){
        // myfeed 정보 return 변경필요
        return "/myfeed/insert";
    }

    @PostMapping("/myfeed/insert")
    public String myFeedInsert(/*@RequestPart("memId") String memId,*/
                                   @RequestPart("petName") String petName,
                                   @RequestPart("feedTitle") String feedTitle,
                                   @RequestPart("feedContent") String feedContent,
                                   @RequestPart("image")MultipartFile image,
                                   MyFeedVO new_myFeed) throws IOException {

        int feedNo = myFeedService.getLastFeedNumber();
        int imgNo = imageService.insertImage(image, "feed");


        new_myFeed = new MyFeedVO(
                "test" /*memId*/,
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
                                MyFeedVO update_myFeed) throws IOException {


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
    public String myFeedDelete( @PathVariable("feedNo") int feedNo,
                                MyFeedVO delete_myFeed) throws IOException {

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
