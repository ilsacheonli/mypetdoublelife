package com.mypet.doublelifebackend.controller;

import com.mypet.doublelifebackend.service.ImageService;
import com.mypet.doublelifebackend.service.MyFeedService;
import com.mypet.doublelifebackend.vo.MyFeedVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
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

    @PostMapping("/myfeed/update")
    public String myFeedUpdate( @RequestPart("petName") String petName,
                                @RequestPart("feedNo") int feedNo,
                                @RequestPart("feedTitle") String feedTitle,
                                @RequestPart("feedContent") String feedContent,
                                @RequestPart("imgNo") int imgNo,
                                @RequestPart("image") MultipartFile image,
                                MyFeedVO update_myFeed) throws IOException {


        update_myFeed = new MyFeedVO(
                "test" /*memId*/,
                petName,
                feedNo,
                feedTitle,
                feedContent,
                imgNo
        );





        return "/myfeed/update";
    }









}