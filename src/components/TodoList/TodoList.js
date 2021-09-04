import React from "react";
import Todo from "../Todo/Todo";

function TodoList({
  handleDeleteClick,
  handleEditClick,
  handleCompleteTodo,
  filteredTodos
}) {
  return (
    <div>
      {filteredTodos && filteredTodos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          handleDeleteClick={handleDeleteClick}
          handleEditClick={handleEditClick}
          handleCompleteTodo={handleCompleteTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
