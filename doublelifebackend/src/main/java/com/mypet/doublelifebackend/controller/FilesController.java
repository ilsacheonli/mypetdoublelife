package com.mypet.doublelifebackend.controller;

import com.mypet.doublelifebackend.service.FilesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class FilesController {
    @Autowired
    private FilesService filesService;

    // http body에 파일을 담아서 json 형식으로 전송
    @GetMapping("/board/fileRead/{boardId}")
    public ResponseEntity<byte[]> readFile(@PathVariable("boardId")int boardId) throws IOException {

        // 파일 경로를 저장한 변수
        List<String> saved_path = filesService.readFilePath(boardId);

        // 응답 보낼 객체 생성
        ResponseEntity<byte[]> result = null;

        for(String path : saved_path) {
            File file = new File(path);
            try {

                // http header
                HttpHeaders header = new HttpHeaders();

                // Content-type 정보 추가
                header.add("Content-type", Files.probeContentType(file.toPath()));

                // 응답 객체에 파일의 바이트 배열, 헤더, 상태 정보를 저장
                result = new ResponseEntity<>(FileCopyUtils.copyToByteArray(file), header, HttpStatus.OK);

            }catch (IOException e) {
                e.printStackTrace();
            }

        }
        return result;
    }
}