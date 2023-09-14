package com.mypet.doublelifebackend.controller;

import com.mypet.doublelifebackend.service.PetReplyService;
import com.mypet.doublelifebackend.vo.MemberVO;
import com.mypet.doublelifebackend.vo.PetReplyVO;
import com.mypet.doublelifebackend.vo.TodoVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class PetReplyController {
    @Autowired
    PetReplyService petReplyService;

    @GetMapping("/reply/{reNo}")
    public PetReplyVO getPetReplyByNo(@PathVariable("reNo") int reNo){

        return petReplyService.getPetReplyByNo(reNo);

    }


    @GetMapping("/myfeed/replyList/{myFeedNo}")
    public List<PetReplyVO> getAllPetReplyByMfNo(@PathVariable("myFeedNo") String myFeedNo){

        return petReplyService.getAllPetReplyByMfNo(Integer.parseInt(myFeedNo));

    }

    @GetMapping("/feedview/replyList/{petstivalNo}")
    public List<PetReplyVO> getAllPetReplyByPtNo(@PathVariable("petstivalNo") String petstivalNo){

        return petReplyService.getAllPetReplyByPtNo(Integer.parseInt(petstivalNo));
    }

    @PostMapping("/myfeed/reply/insert")
    public String addMyFeedReply(@RequestPart String myFeedNo,
                                 @RequestPart String reContent,
                                 PetReplyVO new_reply, HttpServletRequest request){

        HttpSession session = request.getSession();
        MemberVO login_member = (MemberVO) session.getAttribute("member");

        int lastNumber = petReplyService.getLastReNoNumber();

        new_reply = new PetReplyVO(
                login_member.getMemId(),
                lastNumber,
                Integer.parseInt(myFeedNo),
                "myFeed",
                reContent
        );

        petReplyService.addMyFeedReply(new_reply);

        PetReplyVO added_reply = petReplyService.getPetReplyByNo(lastNumber);

        if (String.valueOf(added_reply).equals("null")){

            return "reply?insertFail";
        }

        return "reply?insertSuccess";
    }

    @PostMapping("/feedview/reply/insert")
    public String addPetsitvalReply(@RequestPart String petstivalNo,
                                    @RequestPart String reContent,
                                    PetReplyVO new_reply, HttpServletRequest request){

        HttpSession session = request.getSession();
        MemberVO login_member = (MemberVO) session.getAttribute("member");

        int lastNumber = petReplyService.getLastReNoNumber();

        new_reply = new PetReplyVO(
                login_member.getMemId(),
                lastNumber,
                Integer.parseInt(petstivalNo),
                "petstival",
                reContent
        );

        petReplyService.addPetstivalReply(new_reply);

        PetReplyVO added_reply = petReplyService.getPetReplyByNo(lastNumber);

        if (String.valueOf(added_reply).equals("null")){

            return "reply?insertFail";
        }

        return "reply?insertSuccess";
    }

    @GetMapping("/reply/delete/{reNo}")
    public String deleteMyTodo(@PathVariable("reNo") int reNo, HttpServletRequest request){

        HttpSession session = request.getSession();
        Object login_member = session.getAttribute("member");

        if(login_member == null){
            try {
                // throw로 강제 예외 발생
                throw new Exception("로그인 확인");
            } catch (Exception e) {
                System.out.println("ERROR : " + e.getMessage());
                e.printStackTrace();
            }
        }

        petReplyService.removePetReply(reNo);

        PetReplyVO deleted_reply = petReplyService.getPetReplyByNo(reNo);

        if (!String.valueOf(deleted_reply).equals("null")){

            try {
                // throw로 강제 예외 발생
                throw new Exception("삭제 실패");
            } catch (Exception e) {
                System.out.println("ERROR : " + e.getMessage());
                e.printStackTrace();
            }
        }

        return "reply?deleteSuccess";
    }



}
