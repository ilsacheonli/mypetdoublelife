
package com.mypet.doublelifebackend.controller;

import com.mypet.doublelifebackend.service.BoardService;
import com.mypet.doublelifebackend.vo.BoardVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import java.io.IOException;
import java.util.List;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class BoardFrontController {

    @Autowired
    private BoardService service;

    // 카테고리별 목록 페이지로 이동
    @GetMapping("petmunity/{category}")
    public List<BoardVO> listPost(@PathVariable("category") String category) {

        List<BoardVO> list = null;
        list = service.list(category);

        return list;
    }

    // qna 게시물 작성 화면으로 이동
    @GetMapping("petmunity/{category}/writePage")
    public int writePost(@PathVariable("category") String category) {

        int bno = 0;

        // 작성되는 글 번호를 bno에 저장
        if(category.equals("qna")) {
            bno = service.getQnaBno();
        }
        else if (category.equals("trade")) {
            bno = service.getTradeBno();
        }
        else if (category.equals("walkingmate")) {
            bno = service.getWalkingmateBno();
        }

        return bno;
    }

    // 게시물 작성 후 등록
    @PostMapping("petmunity/writePage")
    public String write(@RequestBody BoardVO boardVO) throws IOException {
        String category = "qna";

        System.out.println("category = " + category);
//        System.out.println("title = " + title);
        System.out.println("BoardVO : " + boardVO);

        // 게시글을 db에 저장
        if(category.equals("qna")) {
            service.writeQna(boardVO);
        }
        else if (category.equals("trade")) {
            service.writeTrade(boardVO);
        }
        else if (category.equals("walkingmate")) {
            service.writeWalkingmate(boardVO);
        }

        return "redirect:/petmunity/qna";
    }

    // 게시물 상세 조회
    @GetMapping("/board/view/{id}")
    public BoardVO read(@PathVariable("id") int id) {
        // service.boardViewCnt(category,bno);
        BoardVO boardVO = service.selectOne(id);

        return boardVO;
    }

    // 수정 화면으로 이동
    @GetMapping("/petmunity/{category}/modify/{bno}")
    public void modify(@PathVariable("category") String category, @PathVariable("bno") int bno) {

        // BoardVO boardVO = service.selectOne(category, bno);

        // return boardVO;

    }

    // 게시물 수정
    @PostMapping("/petmunity/{category}/modify/{bno}")
    public void modify(BoardVO boardVO) {
        service.modify(boardVO);
    }

    // 게시물 삭제
    @GetMapping("petmunity/{category}/delete/{bno}")
    public void delete(@PathVariable("category") String category, @PathVariable("bno") int bno) {
        service.delete(category, bno);
    }

    // 좋아요 수 증가
    @GetMapping("/petmunity/{category}/updateLike/{bno}")
    public void updateLike(@PathVariable("category") String category, @PathVariable("bno") int bno) {
        service.updateLike(category, bno);
    }
}

