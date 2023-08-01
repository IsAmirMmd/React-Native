import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncTodos } from "../feature/Todos/TodosSlice";

const TodoList = () => {
  const { todos, loading, error } = useSelector((state) => state.todos);
  const dispacth = useDispatch();

  useEffect(() => {
    dispacth(getAsyncTodos());
  }, []);

  if (loading) return <p>loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
      ))}
    </ul>
  );
};

export default TodoList;
