package com.mypet.doublelifebackend.service;

import com.mypet.doublelifebackend.repository.FilesRepository;
import com.mypet.doublelifebackend.vo.FilesVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class FilesService {

    @Autowired
    private FilesRepository filesRepository;

    //파일을 업로드 하는 메서드
    public void uploadFile(List<MultipartFile> files, String category, int bno) throws IOException {

        List<FilesVO> filesVOList = new ArrayList<FilesVO>();

        for(MultipartFile file : files) {

            // 기존 파일명 추출
            String originName = file.getOriginalFilename();
            System.out.println("originName = " + originName);

            // 고유 식별자 uuid 생성
            String uuid = UUID.randomUUID().toString();
            System.out.println("uuid = " + uuid);

            // 확장자 추출
            String extension = originName.substring(originName.lastIndexOf("."));
            System.out.println("extension = " + extension);

            // uuid와 확장자를 결합하고 새 파일 이름으로 지정
            String savedName = uuid + extension;
            System.out.println("savedName = " + savedName);

            // 파일이 저장되는 루트 경로
            String fileDir = "C:/img/";

            // 파일이 저장된 전체 경로
            String savedPath = fileDir + savedName;
            System.out.println("savedPath = " + savedPath);

            // 바이트 단위로 반환된 파일의 크기
            Long fileSize = file.getSize();
            System.out.println("fileSize = " + fileSize);

            // 파일 VO 생성
            FilesVO filesVO = new FilesVO(category, bno, originName, savedName, fileSize, savedPath);
            System.out.println("filesVO = " + filesVO);

            // 파일 VO 객체를 리스트에 추가
            filesVOList.add(filesVO);

            // 파일을 로컬 경로에 저장
            file.transferTo(new File(savedPath));
        }

        System.out.println("filesVOList = " + filesVOList);

        // 데이터베이스에 파일 정보 저장
        filesRepository.uploadFile(filesVOList);
    }

    // 파일 경로 반환하는 메서드
    public List<String> readFilePath(String category, int bno) {
        return filesRepository.readFilePath(category, bno);
    }
}