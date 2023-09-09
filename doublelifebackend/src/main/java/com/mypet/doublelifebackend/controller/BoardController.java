//package com.mypet.doublelifebackend.controller;
//
//import com.mypet.doublelifebackend.service.BoardService;
////import com.mypet.doublelifebackend.service.FilesService;
//import com.mypet.doublelifebackend.vo.BoardVO;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.*;
////import org.springframework.web.multipart.MultipartFile;
//
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpSession;
//import java.io.IOException;
//import java.util.ArrayList;
//import java.util.List;
//
//@Controller
//@CrossOrigin(origins = "http://localhost:3000")
//public class BoardController {
//
//    @Autowired
//    private BoardService service;
//
////    @Autowired
////    private FilesService filesService;
//
//    // 펫뮤니티 페이지로 이동
//    @GetMapping("/petmunity")
//    public String index() {
//
//        return "PetMunity/petmunity";
//    }
//
//    // 게시판별 목록 페이지로 이동
//    @GetMapping("petmunity/{category}")
//    public String boardList(@PathVariable("category") String category, @PathVariable("num") int num, Model model, HttpServletRequest request) { // num은 페이지 번호
//
//        // 세션에 member Object 여부 확인
//        HttpSession session = request.getSession();
//        Object memberObject = session.getAttribute("member");
//
////        if (memberObject == null){
////            // 로그인 x면 signin 페이지로 return
////            return "redirect:/signIn";
////        }
//
//        // 게시물의 총 개수
//        int totalPost = service.countList(category);
//
//        // 한 페이지에 출력할 게시물 개수
//        int postNum = 10;
//
//        // 최종 마지막 페이지 번호 -> totalPost/postNum 한 값을 올림한 값
//        int finalLastPage = (int)Math.ceil((double)totalPost/postNum);
//
//        // 현재 페이지에서 보이는 첫번째 게시글 번호와 마지막 게시글 번호
//        int lastPost = totalPost - postNum * (num-1);
//        int firstPost = lastPost - postNum + 1;
//
//        // 표시되는 하단 페이지 개수의 단위
//        int pageNum = 10;
//
//        // 표시되는 페이지 번호 중 마지막 번호
//        int endPage = (int)(Math.ceil((double)num / (double)pageNum) * pageNum);
//
//        // 표시되는 페이지 번호 중 첫번째 번호
//        int startPage = endPage - (pageNum - 1);
//
//        // endPage가 finalLastPage보다 클 경우 endPage를 finalLastPage로 치환
//        if(finalLastPage < endPage) {
//            endPage = finalLastPage;
//        }
//
//        // 현재 페이지에서 표시되어야 하는 첫 번째 페이지 번호부터 마지막 페이지 번호까지 리스트에 추가
//        List<Integer> pagesList = new ArrayList<Integer>();
//        for(int i=startPage; i<=endPage; i++) {
//            pagesList.add(i);
//        }
//
//        // 이전, 다음 페이지가 있는지 여부를 판단한 값
//        boolean prev = num == 1 ? false : true;
//        boolean next = num == finalLastPage ? false : true;
//
//        // 현재 페이지의 게시글 목록을 리스트에 추가
//        List<BoardVO> list = null;
//
//        list = service.listPage(category, firstPost, lastPost);
//
//        model.addAttribute("list", list);
//        model.addAttribute("pagesList", pagesList);
//        model.addAttribute("startPage", startPage);
//        model.addAttribute("endPage", endPage);
//        model.addAttribute("prev", prev);
//        model.addAttribute("next", next);
//        model.addAttribute("num", num);
//
//        return "PetMunity/" + category;
//    }
//
//    // 게시판별 글 작성 화면으로 이동
//    @GetMapping("petmunity/writePage")
//    public String writePost(@PathVariable("category") String category, Model model) {
//
//        int bno = 0;
//
//        // 작성되는 글 번호를 bno에 저장
//        if(category.equals("qna")) {
//            bno = service.getQnaBno();
//        }
//        else if (category.equals("trade")) {
//            bno = service.getTradeBno();
//        }
//        else if (category.equals("walkingmate")) {
//            bno = service.getWalkingmateBno();
//        }
//
//        model.addAttribute("bno", bno);
//        model.addAttribute("category", category);
//
//
//        return "PetMunity/write";
//    }
//
////    @RequestPart("category") String category, @RequestPart("title") String title
//    @PostMapping("petmunity/writePage")
//    public String write(@RequestBody BoardVO boardVO) throws IOException {
//        String category = "qna";
//
//        System.out.println("category = " + category);
////        System.out.println("title = " + title);
//        System.out.println("BoardVO : " + boardVO);
//
//        // 게시글을 db에 저장
//        if(category.equals("qna")) {
//            service.writeQna(boardVO);
//        }
//        else if (category.equals("trade")) {
//            service.writeTrade(boardVO);
//        }
//        else if (category.equals("walkingmate")) {
//            service.writeWalkingmate(boardVO);
//        }
//
//        return "redirect:/petmunity/qna";
//    }
//
//    // 게시물 상세 조회
//    @GetMapping("/petmunity/{category}/view/{num}")
//    public String read(@PathVariable("category") String category ,@PathVariable("num") int num, Model model) { // num은 게시글 번호
//
//        service.boardViewCnt(category,num);
//        BoardVO boardVO = service.selectOne(category, num);
//
//        model.addAttribute("board", boardVO);
//        model.addAttribute("category", category);
//
//        return "PetMunity/view";
//    }
//
//    // 수정 화면으로 이동
//    @GetMapping("/petmunity/{category}/modify/{num}")
//    public String modify(@PathVariable("category") String category ,@PathVariable("num") int num, Model model) {
//
//        BoardVO boardVO = service.selectOne(category, num);
//        model.addAttribute("board", boardVO);
//
//        return "PetMunity/modify";
//
//    }
//
//    // 게시물 수정
//    @PostMapping("/petmunity/{category}/modify/{num}")
//    public String modify(@PathVariable("category") String category, @PathVariable("num") String num, BoardVO boardVO) { // num은 게시글 번호
//
//        service.modify(boardVO);
//
//        return "redirect:/petmunity/"+ category +"/view/"+ num;
//    }
//
//    // 게시물 삭제
//    @GetMapping("petmunity/{category}/delete/{num}")
//    public String delete(@PathVariable("category") String category, @PathVariable("num") int bno) { // num은 게시글 번호
//        // 해당 게시글 삭제
//        service.delete(category, bno);
//
//        return "redirect:/petmunity/" + category + "/1";
//    }
//
//    // 좋아요 수 증가
//    @GetMapping("/petmunity/{category}/updateLike/{num}")
//    public String updateLike(@PathVariable("category") String category, @PathVariable("num") int bno) { // num은 게시글 번호
//
//        service.updateLike(category, bno);
//        return "redirect:/petmunity/" + category + "/view/" + bno;
//    }
//}

