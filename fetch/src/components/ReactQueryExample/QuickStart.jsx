import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getTodos, postTodo } from "./my-api";

const QuickStart = () => {
  const queryClient = useQueryClient();

  const query = useQuery("todos", getTodos);

  const mutation = useMutation(postTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  if (query.isLoading) {
    return "loading...";
  }

  if (query.error) {
    return "Error....";
  }

  return (
    <div>
      <ul>
        {query.data.todos.map((todo) => {
          return <li key={todo.id}>{todo.title}</li>;
        })}
      </ul>
      <button
        onClick={() => {
          mutation.mutate({
            id: Date.now(),
            title: "Learn React-Query",
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default QuickStart;
