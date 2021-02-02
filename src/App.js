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
  const [newTodo, setNewTodo] = useState('');

  const handleDelete = i => {
    const newTodoList = [...todoList];
    newTodoList.splice(i, 1);
    setTodoList(newTodoList);
  }


  return (
    <main>
      <header>
       <h1>Shit I Gotta Do</h1>
      </header>

      <section>
        <form>
          <label htmlFor="add-todo">New Shit:</label>
          <input id="add-todo" className="add-todo-input" type="text" required onChange={
            e => setNewTodo(e.target.value)
          }/>
          <input type="submit" value="Add" className="add-btn"/>
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