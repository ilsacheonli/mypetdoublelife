package com.mypet.doublelifebackend.controller;

import com.mypet.doublelifebackend.service.BoardService;
import com.mypet.doublelifebackend.service.FilesService;
import com.mypet.doublelifebackend.vo.BoardVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
public class BoardController {

    @Autowired
    private BoardService service;

    @Autowired
    private FilesService filesService;

    // 펫뮤니티 페이지로 이동
    @GetMapping("/petmunity")
    public String index() {

        return "PetMunity/petmunity";
    }

    // 게시판별 목록 페이지로 이동
    @GetMapping("petmunity/{category}/{num}")
    public String listTrade(@PathVariable("category") String category, @PathVariable("num") int num, Model model) { // num은 페이지 번호

        // 게시물의 총 개수
        int totalPost = service.countList(category);

        // 한 페이지에 출력할 게시물 개수
        int postNum = 10;

        // 최종 마지막 페이지 번호 -> totalPost/postNum 한 값을 올림한 값
        int finalLastPage = (int)Math.ceil((double)totalPost/postNum);

        // 현재 페이지에서 보이는 첫번째 게시글 번호와 마지막 게시글 번호
        int lastPost = totalPost - postNum * (num-1);
        int firstPost = lastPost - postNum + 1;

        // 표시되는 하단 페이지 개수의 단위
        int pageNum = 10;

        // 표시되는 페이지 번호 중 마지막 번호
        int endPage = (int)(Math.ceil((double)num / (double)pageNum) * pageNum);

        // 표시되는 페이지 번호 중 첫번째 번호
        int startPage = endPage - (pageNum - 1);

        // endPage가 finalLastPage보다 클 경우 endPage를 finalLastPage로 치환
        if(finalLastPage < endPage) {
            endPage = finalLastPage;
        }

        // 현재 페이지에서 표시되어야 하는 첫 번째 페이지 번호부터 마지막 페이지 번호까지 리스트에 추가
        List<Integer> pagesList = new ArrayList<Integer>();
        for(int i=startPage; i<=endPage; i++) {
            pagesList.add(i);
        }

        // 이전, 다음 페이지가 있는지 여부를 판단한 값
        boolean prev = num == 1 ? false : true;
        boolean next = num == finalLastPage ? false : true;

        // 현재 페이지의 게시글 목록을 리스트에 추가
        List<BoardVO> list = null;
        list = service.listPage(category, firstPost, lastPost);

        model.addAttribute("list", list);
        model.addAttribute("pagesList", pagesList);
        model.addAttribute("startPage", startPage);
        model.addAttribute("endPage", endPage);
        model.addAttribute("prev", prev);
        model.addAttribute("next", next);
        model.addAttribute("num", num);

        return "PetMunity/" + category;
    }

    // 게시판별 글 작성 화면으로 이동
    @GetMapping("petmunity/{category}/writePage")
    public String writeQna(@PathVariable("category") String category) {

        return "PetMunity/write";
    }

    // 게시물 작성 후 등록
    @PostMapping("petmunity/{category}/writePage")
    public String write(@PathVariable("category") String category, List<MultipartFile> files, BoardVO boardVO) throws IOException {
        if(category.equals("qna")) {
            service.writeQna(boardVO);
        }
        else if (category.equals("trade")) {
            service.writeTrade(boardVO);
        }
        else if (category.equals("walkingmate")) {
            service.writeWalkingmate(boardVO);
        }

        // 게시글 번호를 변수에 저장, 글 번호 임시
        int bno = 2;

        // 리스트의 첫번째 파일을 변수에 저장
        MultipartFile firstFile = files.get(0);

        // 첫번째 파일이 있으면
        if(!firstFile.isEmpty()){
            //파일과 파일 정보를 db에 저장하는 메서드 실행
            filesService.uploadFile(files, bno);
        }

        return "redirect:/petmunity/"+ boardVO.getCategory() + "/1";
    }

    // 게시물 상세 조회
    @GetMapping("/petmunity/{category}/view/{num}")
    public String read(@PathVariable("category") String category ,@PathVariable("num") int num, Model model) { // num은 게시글 번호

        service.boardViewCnt(category,num);
        BoardVO boardVO = service.selectOne(category, num);
        model.addAttribute("board", boardVO);
        model.addAttribute("category", category);

        return "PetMunity/view";
    }

    // 수정 화면으로 이동
    @GetMapping("/petmunity/{category}/modify/{num}")
    public String modify(@PathVariable("category") String category ,@PathVariable("num") int num, Model model) {

        BoardVO boardVO = service.selectOne(category, num);
        model.addAttribute("board", boardVO);

        return "PetMunity/modify";

    }

    // 게시물 수정
    @PostMapping("/petmunity/{category}/modify/{num}")
    public String modify(@PathVariable("category") String category, @PathVariable("num") String num, BoardVO boardVO) { // num은 게시글 번호

        service.modify(boardVO);

        return "redirect:/petmunity/"+boardVO.getCategory() +"/view/"+ boardVO.getBno();
    }

    // 게시물 삭제
    @GetMapping("petmunity/{category}/delete/{num}")
    public String delete(@PathVariable("category") String category, @PathVariable("num") int bno, HttpServletRequest request) { // num은 게시글 번호

        service.delete(category, bno);

        return "redirect:/petmunity/" + category + "/1";
    }

    // 좋아요 수 증가
    @PostMapping("/petmunity/{id}/updateLike")
    public String updateLike(@PathVariable("id") int id, HttpServletRequest request) {

        service.updateLike(id);
        return "redirect:" + request.getHeader("Referer");
    }
}
