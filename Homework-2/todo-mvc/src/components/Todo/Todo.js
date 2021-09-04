import React from "react";
import { IoIosClose } from "react-icons/io";
import { AiFillEdit } from "react-icons/ai";

function Todo({ todo, handleDeleteClick, handleEditClick, handleCompleteTodo }) {
  return (
    <div className="todo">
      <label className="checkbox-container">
        <input
          type="checkbox"
          className="checkbox"
          defaultChecked={todo.completed ? true : false}
          onChange={() => handleCompleteTodo(todo.id)}
        />
        <span className="checkmark"></span>
      </label>
      <div className={`todo-text ${todo.completed ? 'completed-todo' : ''}`}>{todo.title}</div>
      <button onClick={() => handleEditClick(todo)}>
        <AiFillEdit size={22} color={"#2ecc71"} />
      </button>
      <button onClick={() => handleDeleteClick(todo.id)}>
        <IoIosClose size={40} color={"#e74c3c"} />
      </button>
    </div>
  );
}

export default Todo;
