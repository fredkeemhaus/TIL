import React from "react";
import { useRecoilValue } from "recoil";
import TodoItem from "./TodoItem";
import TodoListCreator from "./TodoListCreator";
import TodoListFilters from "./TodoListFilters";
import TodoListStats from "./TodoListStats";
import { filteredTodoListState } from "./TodoStore";

const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <div>
      <TodoListStats />
      <TodoListFilters />
      <TodoListCreator />
      {todoList?.map((item) => {
        return <TodoItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default TodoList;
