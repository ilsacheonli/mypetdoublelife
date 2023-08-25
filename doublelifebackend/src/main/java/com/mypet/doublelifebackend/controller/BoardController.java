package com.mypet.doublelifebackend.controller;

import com.mypet.doublelifebackend.service.BoardService;
import com.mypet.doublelifebackend.vo.BoardVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
public class BoardController {

    @Autowired
    private BoardService service;

    //펫뮤니티 페이지로 이동
    @GetMapping("/petmunity")
    public String index() {

        return "PetMunity/petmunity";
    }

    // qna 게시판 목록 페이지로 이동
    @GetMapping("petmunity/qna")
    public String listQna(String category, Model model) {

        category = "QNA";
        List<BoardVO> list = null;
        list = service.list(category);
        model.addAttribute("list", list);

        return "PetMunity/qna";
    }

    // 중고거래 게시판 목록 페이지로 이동
    @GetMapping("petmunity/trade")
    public String listTrade(String category, Model model) {

        category = "중고거래";
        List<BoardVO> list = null;
        list = service.list(category);
        model.addAttribute("list", list);

        return "PetMunity/trade";
    }

    // 산책메이트 게시판 목록 페이지로 이동
    @GetMapping("petmunity/walkingmate")
    public String listWalkingmate(String category, Model model) {

        category = "산책메이트";
        List<BoardVO> list = null;
        list = service.list(category);
        model.addAttribute("list", list);

        return "PetMunity/walkingmate";
    }

    // qna 게시물 작성 화면으로 이동
    @GetMapping("petmunity/qna/writePage")
    public String writeQna() {

        return "PetMunity/write";

    }

    // 중고거래 게시물 작성 화면으로 이동
    @GetMapping("petmunity/trade/writePage")
    public String writeTrade() {

        return "PetMunity/write";

    }

    // 산책메이트 게시물 작성 화면으로 이동
    @GetMapping("petmunity/walkingmate/writePage")
    public String write() {

        return "PetMunity/write";

    }

    // 게시물 작성 후 등록
    @PostMapping("petmunity/qna/writePage")
    public String write(BoardVO boardVO) {

        service.write(boardVO);

        return "redirect:/petmunity/qna";
    }

    // 게시물 상세 조회
    @GetMapping("/board/view")
    public String read(@RequestParam("bno") int bno, Model model) {

        BoardVO boardVO = service.selectOne(bno);
        model.addAttribute("board", boardVO);

        return "PetMunity/view";
    }

    // 수정 화면으로 이동
    @GetMapping("board/modify")
    public String modify(@RequestParam("bno") int bno, Model model) {

        BoardVO boardVO = service.selectOne(bno);
        model.addAttribute("board", boardVO);

        return "PetMunity/modify";

    }

    // 게시물 수정
    @PostMapping("board/modify")
    public String modify(BoardVO boardVO) {

        service.modify(boardVO);

        return "redirect:/board/view?bno=" + boardVO.getBno();
    }

    // 게시물 삭제
    @GetMapping("board/delete")
    public String delete(@RequestParam("bno") int bno) {

        service.delete(bno);

        return "redirect:/petmunity/qna";
    }
}
