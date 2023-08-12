package com.mypet.doublelifebackend.controller;

import com.mypet.doublelifebackend.entity.BoardEntity;
import com.mypet.doublelifebackend.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
public class boardController {

    private final BoardService boardService;

    // 게시글 등록
    @PostMapping("/board")
    public ResponseEntity<?> save(@RequestBody BoardEntity boardEntity) {
        return new ResponseEntity<>(boardService.save(boardEntity), HttpStatus.CREATED);
    }

//    저장 - 반환값을 entity로 하는 방법
//    @PostMapping("/board")
//    public BoardEntity save(@RequestBody BoardEntity boardEntity) {
//        return boardService.save(boardEntity);
//    }


    // 게시글 전체 목록 조회
    @GetMapping("/board")
    public ResponseEntity<?> findAll() {
        return new ResponseEntity<>(boardService.getAll(), HttpStatus.OK);
    }

    // 게시글 상세 조회
    @GetMapping("/board/{bno}")
    public ResponseEntity<?> findById(@PathVariable Integer bno) {
        return new ResponseEntity<>(boardService.getEntity(bno), HttpStatus.OK);
    }

    //게시글 수정
    @PutMapping("/board/{bno}")
    public ResponseEntity<?> update(@PathVariable Integer bno, @RequestBody BoardEntity boardEntity) {
        return new ResponseEntity<>(boardService.update(bno, boardEntity), HttpStatus.OK);
    }

    //게시글 삭제
    @DeleteMapping("/board/{bno}")
    public ResponseEntity<?> deleteById(@PathVariable Integer bno) {
        return new ResponseEntity<>(boardService.delete(bno), HttpStatus.OK);
    }
}
