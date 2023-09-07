package com.mypet.doublelifebackend.controller;

import com.mypet.doublelifebackend.service.BoardService;
import com.mypet.doublelifebackend.vo.BoardVO;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
//@CrossOrigin(origins = "http://localhost:3000")
public class JsonController {

    @Autowired
    private BoardService service;

    // qna 게시판 목록 페이지로 이동
    @GetMapping("/board/qna")
    public List<BoardVO> listQna() {

        String category = "qna";
        List<BoardVO> list = null;
        list = service.list(category);
//        model.addAttribute("list", list);

        return list;
    }
}
