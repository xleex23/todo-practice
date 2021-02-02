import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import './App.css';

function App() {

  const [todoList, setTodoList] = useState([
    {
      title: 'buy groceries',
      completed: false
    },
    {
      title: 'feed dog',
      completed: false
    },
    {
      title: 'laundry',
      completed: false
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

  const handleComplete = (i) => {
    const newTodos = [...todoList];
    todoList[i].completed = !todoList[i].completed;
    setTodoList(newTodos)
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
              completeTodo={handleComplete}
            />
          ))}
      </div>
    </main>
  )
}

export default App;