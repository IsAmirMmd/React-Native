import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleCompleted } from "../feature/Todos/TodosSlice";

const TodoItem = ({ id, title, completed }) => {
  const dispacth = useDispatch();
  return (
    <li className={`list-group-item ${completed && "list-group-item-success"}`}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input
            type="checkbox"
            className="mr-3"
            checked={completed}
            onChange={(e) => dispacth(toggleCompleted({ id }))}
          ></input>
          {title}
        </span>
        <button
          className="btn btn-danger"
          onClick={(e) => dispacth(deleteTodo({ id }))}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
