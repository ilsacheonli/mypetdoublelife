package com.mypet.doublelifebackend.service;

import com.mypet.doublelifebackend.repository.MyTodoRepository;
import com.mypet.doublelifebackend.vo.TodoVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;


@Service
public class MyTodoService {
    @Autowired
    MyTodoRepository myTodoRepository;


    public TodoVO getMyTodoByNo(int doNo) {

        return myTodoRepository.selectMyTodoByNo(doNo);
    }


    public List<TodoVO> getAllMyTodoByDate(HashMap<String, Object> map) {

        return myTodoRepository.selectMyTodoByDate(map);
    }


    public void addMyTodo(TodoVO todo) {

        myTodoRepository.insertMyTodo(todo);
    }

    public void editMyTodo(TodoVO todo) {

        myTodoRepository.updateMyTodo(todo);
    }

    public void removeMyTodo(int doNo) {

        myTodoRepository.deleteMyTodo(doNo);
    }

    public int getLastTodoNumber(){

        // getLastNumber()함수 호출 후 memNumber return
        return myTodoRepository.getLastNumber();
    }

}
