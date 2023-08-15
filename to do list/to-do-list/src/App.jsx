

import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() === "") return;
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
  
    <table className="table">
    <tr>
      <div className="app">
        <h1>To-Do List</h1>
        <div className="input-container">
          <textarea rows = "5" cols= "20"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Enter your task..."
          >
            </textarea>
        
          <button onClick={handleAddTodo}>Add</button>
        </div>
    
        <div>
          <tr className="button">
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => handleDeleteTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
        </tr>
        </div>
      </div>
    </tr>
  </table>
    
  );
};

export default App;

