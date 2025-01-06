import React, { useState } from "react";
import TodoList from "./component/TodoList"
import "../src/App.css"


function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");


  const addTodo = () => {
    if (newTodo.trim() === "") {
      alert("Lütfen Bir Todo Giriniz!")
      return;
    }
    setTodos([
      ...todos,
      { id: Date.now(), text: newTodo, completed: false }
    ]);
    setNewTodo("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addTodo();
    }
  }


  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };


  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Yeni todo ekle"
      />
      <button onClick={addTodo}>Ekle</button>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
