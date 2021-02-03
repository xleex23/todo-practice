import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import firebase from './firebase';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import { createTypeAnnotationBasedOnTypeof } from '@babel/types';

function App() {

  const [todoList, setTodoList] = useState([])
  const [newTodo, setNewTodo] = useState("");
  const [loading, setLoading] = useState(false);

  const ref = firebase.firestore().collection('todos');

  function getTodos() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      })
      setTodoList(items);
      setLoading(false);
    })
  }

  useEffect(() => {
    getTodos()
  }, [])

  

  const handleDelete = todo => {
    ref
      .where("id", "==", todo.id)
      .get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => doc.ref.delete())
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleSubmit = e => {
    e.preventDefault();
    ref
      .add({
        title: newTodo,
        id: uuidv4(),
        completed: false
      })
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
              key={todo.id}
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