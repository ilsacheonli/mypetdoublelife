package com.mypet.doublelifebackend.service;


import com.mypet.doublelifebackend.entity.BoardEntity;
import com.mypet.doublelifebackend.repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@RequiredArgsConstructor
@Service
public class BoardService {

    private final BoardRepository boardRepository;

    // 저장
    @Transactional
    public BoardEntity save(BoardEntity boardEntity) {
        return boardRepository.save(boardEntity);
    }

    // 상세 조회
    @Transactional(readOnly = true)
    public BoardEntity getEntity(Integer bno) {
        return boardRepository.findById(bno).orElseThrow(()->new IllegalArgumentException("check bno"));
    }

    // 목록 조회
    @Transactional(readOnly = true)
    public List<BoardEntity> getAll() {
        return boardRepository.findAll();
    }

    // 수정
    @Transactional
    public BoardEntity update(Integer bno, BoardEntity boardEntity) {
        BoardEntity updatedBoardEntity = boardRepository.findById(bno)
                .orElseThrow(()->new IllegalArgumentException("check bno"));

        updatedBoardEntity.setTitle(boardEntity.getTitle());
        updatedBoardEntity.setWriter(boardEntity.getWriter());
        updatedBoardEntity.setContent(boardEntity.getContent());
        updatedBoardEntity.setUpdatedDate(boardEntity.getUpdatedDate());

        return updatedBoardEntity;
    }

    // 삭제
    @Transactional
    public String delete(Integer bno) {
        boardRepository.deleteById(bno);

        return "delete success";
    }
}
