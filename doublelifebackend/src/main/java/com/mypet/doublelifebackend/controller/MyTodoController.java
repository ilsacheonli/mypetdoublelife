package com.mypet.doublelifebackend.controller;

import com.mypet.doublelifebackend.service.MyTodoService;
import com.mypet.doublelifebackend.vo.TodoVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
public class MyTodoController {
    @Autowired
    MyTodoService myTodoService;

    @GetMapping("/mytodo")
    public List<TodoVO> getAllMyTodo (){
        return myTodoService.getAllMyTodo("test");
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

    @PostMapping("/mytodo/delete/{doNo}")
    public String deleteMyTodo( @PathVariable String doNo){

        int del_todo_No = Integer.parseInt(doNo);


        myTodoService.removeMyTodo(del_todo_No);

        TodoVO deleted_todo = myTodoService.getMyTodoByNo(del_todo_No);

        if (!String.valueOf(deleted_todo).equals("null")){

            return "mytodo?deleteFail";
        }

        return "mytodo?deleteSuccess";
    }




}
