import React, { useEffect, useState, useCallback } from "react";
import Footer from "./components/Footer/Footer";
import Input from "./components/Input/Input";
import TodoList from "./components/TodoList/TodoList";
import "./main.scss";


function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if(savedTodos){
        return JSON.parse(savedTodos)
    } else {
      return [];
    }
  });
  const [todoText, setTodoText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});
  const [completedTodo, setCompletedTodo] = useState(null);
  const [status, setStatus] = useState('All');
  const [filteredTodos, setFilteredTodos] = useState([]);


  const saveLocalTodos = useCallback(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  
  useEffect(() => {
    const filterTodos = () => {
      switch (status) {
        case 'All':
          setFilteredTodos(todos)
          break;
        case 'Completed':
          setFilteredTodos(todos.filter((todo) => todo.completed === true))
          break;
        case 'Active':
          setFilteredTodos(todos.filter((todo) => todo.completed === false))
          break;
        default:
          setFilteredTodos(todos)
      }
    }
    filterTodos();
    saveLocalTodos();
  }, [todos,status,saveLocalTodos])

  const onSubmit = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: Math.floor(Math.random() * 100),
        title: todoText.trim(),
        completed: false,
      },
    ]);
    setTodoText("")
  };

  const editOnSubmit = (e) => {
    e.preventDefault()
    handleUpdateTodo(currentTodo.id, currentTodo)
  }

  const handleDeleteClick = (id) => {
    const removeTodo = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removeTodo);
  };

  const handleUpdateTodo = (id, updatedTodo) => {
    const updatedItem = todos.map((todo => {
      return todo.id === id ? updatedTodo : todo;
    }));
    setIsEditing(false);
    setTodos(updatedItem)
  }

  const handleEditClick = (todo) => {
    setIsEditing(true);
    setCurrentTodo({...todo})
  }

  const handleCompleteTodo = (id) => {
    const completeTodo = todos.map((todo=> {
        return todo.id===id ? {...todo, completed:!todo.completed} : {...todo}
    }))
    setCompletedTodo(!completedTodo)
    setTodos(completeTodo)
  }

  return (
    <div className="app">
      <h1 className="todo-app-heading">todos</h1>
         <div className="todo-app">
         <Input
           todoText={todoText}
           setTodoText={setTodoText}
           onSubmit={onSubmit}
           isEditing={isEditing}
           currentTodo={currentTodo}
           setCurrentTodo={setCurrentTodo}
           editOnSubmit={editOnSubmit}
         />
         <TodoList 
           handleDeleteClick={handleDeleteClick}
           handleEditClick={handleEditClick}
           handleCompleteTodo={handleCompleteTodo}
           filteredTodos={filteredTodos}
         />
         <Footer 
           todos={todos}
           setStatus={setStatus}
          />
       </div>
    </div>
  );
}

export default App;
