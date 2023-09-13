package com.mypet.doublelifebackend.controller;

import com.mypet.doublelifebackend.service.BoardService;
import com.mypet.doublelifebackend.service.FilesService;
import com.mypet.doublelifebackend.vo.BoardVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.multipart.MultipartFile;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class BoardFrontController {

    @Autowired
    private BoardService service;

    @Autowired
    private FilesService filesService;

    // 카테고리별 목록 페이지로 이동
    @GetMapping("petmunity/{category}")
    public List<BoardVO> listPost(@PathVariable("category") String category) {

        List<BoardVO> list = null;
        list = service.list(category);

        return list;
    }

    // 게시물 작성 후 등록
    @PostMapping("petmunity/{category}")
    public void write(@PathVariable("category") String category, @RequestBody BoardVO boardVO, @RequestPart List<MultipartFile> files) throws IOException {

        // 작성될 글 id 값
        int board_id = service.selectNextBoardId();

        // 작성된 글을 db에 저장
        if(category.equals("writepage")) {
            service.writeQna(boardVO);
        }
        else if (category.equals("writepage2")) {
            service.writeTrade(boardVO);
        }
        else if (category.equals("writepage3")) {
            service.writeWalkingmate(boardVO);
        }

        // 리스트의 첫번째 파일을 변수에 저장
        MultipartFile firstFile = files.get(0);

        // 첫번째 파일이 있으면
        if(!firstFile.isEmpty()){
            //파일과 파일 정보를 db에 저장하는 메서드 실행
            filesService.uploadFile(files, board_id);
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
    public void modify(@RequestBody BoardVO boardVO) {
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