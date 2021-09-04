import React from "react";
import { IoIosArrowDown, IoIosClose } from "react-icons/io";
import { GrUpdate } from "react-icons/gr";

function Input({
  todoText,
  setTodoText,
  onSubmit,
  isEditing,
  currentTodo,
  setCurrentTodo,
  editOnSubmit,
}) {
  const handleInputChange = (e) => {
    setTodoText(e.target.value);
  };
  const handleEditInputChange = (e) => {
    setCurrentTodo({ ...currentTodo, title: e.target.value });
    console.log(currentTodo);
  };
  return isEditing ? (
    <form onSubmit={editOnSubmit} className="add-todo-container">
      <input
        value={currentTodo.title}
        onChange={handleEditInputChange}
        type="text"
        placeholder="What needs to be done ?"
        className="add-todo-input edit-todo-input"
      />
      <button type="submit" onClick={editOnSubmit}>
        <GrUpdate size={17} color={"#2ecc71"} />
      </button>
      <button>
        <IoIosClose size={40} color={"#e74c3c"} />
      </button>
    </form>
  ) : (
    <form onSubmit={onSubmit} className="add-todo-container">
      <IoIosArrowDown size={25} color={"#2c3e50"} className="input-icon" />
      <input
        value={todoText}
        onChange={handleInputChange}
        type="text"
        placeholder="What needs to be done ?"
        className="add-todo-input"
      />
    </form>
  );
}

export default Input;
