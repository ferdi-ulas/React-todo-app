import React from "react";
import "../css/TodoItem.css"

function TodoItem({ todo, toggleTodo, deleteTodo }) {
    return (
        <li className={todo.completed ? 'completed' : ''}>
            <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)} className="delete-button">
                Sil
            </button>
        </li>
    );
}

export default TodoItem;
