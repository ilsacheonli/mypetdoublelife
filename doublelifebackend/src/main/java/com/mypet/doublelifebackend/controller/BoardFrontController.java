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

    // 게시물 작성 후 등록
    @PostMapping("petmunity/writePage")
    public void write(@RequestBody BoardVO boardVO) throws IOException {
        String category = boardVO.getCategory();

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
    }

    // 게시물 상세 조회
    @GetMapping("/board/view/{id}")
    public BoardVO read(@PathVariable("id") int id) {
        service.boardViewCnt(id);
        BoardVO boardVO = service.selectOne(id);

        return boardVO;
    }

    // 수정 화면으로 이동
    @GetMapping("/board/modify/{id}")
    public BoardVO modify(@PathVariable("id") int id) {

        BoardVO boardVO = service.selectOne(id);

        return boardVO;

    }

    // 게시물 수정
    @PostMapping("/board/modify/{id}")
    public void modify(BoardVO boardVO) {
        service.modify(boardVO);
    }

    // 게시물 삭제
    @GetMapping("board/delete/{id}")
    public void delete(@PathVariable("id") int id) {
        service.delete(id);
    }

    // 좋아요 수 증가
    @GetMapping("board/updateLike/{id}")
    public void updateLike(@PathVariable("id") int id) {
        service.updateLike(id);
    }
}