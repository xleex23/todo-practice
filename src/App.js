import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import './App.css';

function App() {

  const [todoList, setTodoList] = useState([
    {
      title: 'buy groceries',
      complete: false
    },
    {
      title: 'feed dog',
      complete: false
    },
    {
      title: 'laundry',
      complete: false
    }
  ])
  const [newTodo, setNewTodo] = useState("");

  const handleDelete = i => {
    const newTodoList = [...todoList];
    newTodoList.splice(i, 1);
    setTodoList(newTodoList);
  }

  const handleSubmit = e => {
    e.preventDefault();
    const newList = [...todoList, {title: newTodo, complete: false}];
    setTodoList(newList);
    document.querySelector("#add-todo").value=""
  }

  const handleChange = e => {
    e.preventDefault();
    setNewTodo(e.target.value);
  }


  return (
    <main>
      <header>
       <h1>Shit I Gotta Do</h1>
      </header>

      <section>
        <form onSubmit={handleSubmit}>
          <label htmlFor="add-todo">New Shit:</label>
          <input id="add-todo" className="add-todo-input" type="text" required onChange={handleChange}/>
          <input type="submit" className="add-btn" value="Add" />
        </form>
      </section>

      <div>
          {todoList.map((todo, i) => (
            <Todo 
              key={i}
              index={i}
              todo={todo}
              deleteTodo={handleDelete}
            />
          ))}
      </div>
    </main>
  )
}

export default App;