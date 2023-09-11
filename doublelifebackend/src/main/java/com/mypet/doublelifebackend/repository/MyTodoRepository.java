package com.mypet.doublelifebackend.repository;

import com.mypet.doublelifebackend.vo.TodoVO;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;

@Repository
public interface MyTodoRepository {
    TodoVO selectMyTodoByNo(int doNo);

    List<TodoVO> selectMyTodoByDate(HashMap<String, Object> map);

    void insertMyTodo(TodoVO todo);

    void updateMyTodo(TodoVO todo);

    void deleteMyTodo(int doNo);

    int getLastNumber();


}
