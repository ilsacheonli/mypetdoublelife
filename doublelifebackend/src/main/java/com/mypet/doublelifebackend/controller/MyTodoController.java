package com.mypet.doublelifebackend.controller;

import com.mypet.doublelifebackend.service.MyTodoService;
import com.mypet.doublelifebackend.vo.TodoVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;

@RestController
public class MyTodoController {
    @Autowired
    MyTodoService myTodoService;

    @GetMapping("/mytodo/{doDate}")
    public List<TodoVO> getAllMyTodo (@PathVariable("doDate") String doDate){
        HashMap<String, Object> map = new HashMap<String,Object>();
        map.put("memId", "test");
        map.put("doDate", doDate);

        return myTodoService.getAllMyTodo(map);
    }

    @PostMapping("/mytodo/insert")
    public String addMyTodo( @RequestPart String doDate,
                             @RequestPart String doContent,
                             TodoVO new_todo){

        int lastNumber = myTodoService.getLastTodoNumber();

        new_todo = new TodoVO(
                "test",
                lastNumber,
                doDate,
                doContent
        );

        myTodoService.addMyTodo(new_todo);

        TodoVO added_todo = myTodoService.getMyTodoByNo(lastNumber);

        if (String.valueOf(added_todo).equals("null")){

            return "mytodo?insertFail";
        }

        return "mytodo?insertSuccess";
    }

    @PostMapping("/mytodo/update")
    public String updateMyTodo( @RequestPart String doNo,
                                @RequestPart String doDate,
                                @RequestPart String doContent,
                                TodoVO update_todo){



        update_todo = new TodoVO(
                "test",
                Integer.parseInt(doNo),
                doDate,
                doContent
        );

        myTodoService.editMyTodo(update_todo);



        TodoVO updated_todo = myTodoService.getMyTodoByNo(Integer.parseInt(doNo));

        if (String.valueOf(updated_todo).equals("null")){

            return "mytodo?updateFail";
        }

        return "mytodo?updateSuccess";
    }

    @GetMapping("/mytodo/delete/{doNo}")
    public String deleteMyTodo(@PathVariable int doNo, HttpServletRequest request){

        HttpSession session = request.getSession();
        Object login_member = session.getAttribute("member");
        
        if(login_member == null){
            try {
                // throw로 강제 예외 발생
                throw new Exception("로그인 확인");
            } catch (Exception e) {
                System.out.println("ERROR : " + e.getMessage());
                e.printStackTrace();
            }
        }
        
        //int del_todo_No = Integer.parseInt(doNo);

        myTodoService.removeMyTodo(doNo);

        TodoVO deleted_todo = myTodoService.getMyTodoByNo(doNo);

        if (!String.valueOf(deleted_todo).equals("null")){

            try {
                // throw로 강제 예외 발생
                throw new Exception("삭제 실패");
            } catch (Exception e) {
                System.out.println("ERROR : " + e.getMessage());
                e.printStackTrace();
            }
        }

        return "mytodo?deleteSuccess";
    }




}
