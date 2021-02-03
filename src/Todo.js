import React, { useState, useEffect } from 'react';
import './App.css';

function Todo({todo, index, deleteTodo, completeTodo}) {
  return (
    <div className="todo" style={{textDecoration: todo.completed ? "line-through" : ""}}>
      {todo.title}
      <input className="check-box" type="checkbox" onClick={()=>completeTodo(todo)}/>
      <button className="delete-btn" onClick={()=>deleteTodo(todo)}>Delete</button>
    </div>
  )
}

export default Todo;
