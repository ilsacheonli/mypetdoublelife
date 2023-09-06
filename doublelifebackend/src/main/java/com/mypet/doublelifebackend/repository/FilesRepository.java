package com.mypet.doublelifebackend.repository;

import com.mypet.doublelifebackend.vo.FilesVO;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FilesRepository {

    // 파일 관련 정보를 저장하는 메서드
    void uploadFile(List<FilesVO> filesVOList);
    // 파일이 저장된 경로를 반환하는 메서드
    List<String> readFilePath(String category, int bno);
}
