package com.mypet.doublelifebackend.controller;

import com.mypet.doublelifebackend.service.BoardReplyService;
import com.mypet.doublelifebackend.vo.BoardReplyVO;
import com.mypet.doublelifebackend.vo.MemberVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class BoardReplyController {
    @Autowired
    BoardReplyService boardReplyService;

    @GetMapping("/board/reply/{breplyNo}")
    public BoardReplyVO getBoardReplyByBrNo(@PathVariable("breplyNo") int breplyNo){

        return boardReplyService.getBoardReplyByBrNo(breplyNo);

    }


    @GetMapping("/board/replyList/{boardId}")
    public List<BoardReplyVO> getAllBoardReplyBybNo(@PathVariable("boardId") String boardId){

        return boardReplyService.getAllBoardReplyBybNo(Integer.parseInt(boardId));

    }

    @PostMapping("/board/reply/insert")
    public String addBoardReply(@RequestPart String boardId,
                                 @RequestPart String reContent,
                                 BoardReplyVO new_reply, HttpServletRequest request){

        HttpSession session = request.getSession();
        MemberVO login_member = (MemberVO) session.getAttribute("member");

        int lastNumber = boardReplyService.getLastBreNoNumber();

        new_reply = new BoardReplyVO(
                login_member.getMemId(),
                lastNumber,
                Integer.parseInt(boardId),
                reContent
        );

        boardReplyService.addBoardReply(new_reply);

        BoardReplyVO added_reply = boardReplyService.getBoardReplyByBrNo(lastNumber);

        if (String.valueOf(added_reply).equals("null")){

            return "reply?insertFail";
        }

        return "reply?insertSuccess";
    }

    @GetMapping("/board/reply/delete/{breplyNo}")
    public String removeBoardReply(@PathVariable("breplyNo") int breplyNo, HttpServletRequest request){

        HttpSession session = request.getSession();
        MemberVO login_member = (MemberVO) session.getAttribute("member");

        if(String.valueOf(login_member).equals("null")){
            try {
                // throw로 강제 예외 발생
                throw new Exception("로그인 확인");
            } catch (Exception e) {
                System.out.println("ERROR : " + e.getMessage());
                e.printStackTrace();
            }
        }

        HashMap<String, Object> map = new HashMap<String, Object>();
        map.put("memId" ,login_member.getMemId());
        map.put("breplyNo" ,breplyNo);

        boardReplyService.removeBoardReply(map);

        BoardReplyVO deleted_reply = boardReplyService.getBoardReplyByBrNo(breplyNo);

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
