import React, { useState, useEffect } from 'react';
import './App.css';

function Todo({todo, index, deleteTodo}) {
  return (
    <div className="todo">
      {todo.title}
      <input className="check-box" type="checkbox" />
      <button className="delete-btn" onClick={()=>deleteTodo(index)}>Delete</button>
    </div>
  )
}

export default Todo;
