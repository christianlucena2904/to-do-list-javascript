import { useState } from 'react'

import Todo from "./components/Todo";

import "./App.css";
import TodoForm from './components/TodoForm';


function App() {
  const [todos, setTodos] = useState([
  
    {
          id:1,
          text: "criar funcionalidade x no sistema",
          category: "Trabalho",
          isCompleted: false,
        },
        {
          id:2,
          text: "Ir pra academia",
          category: "Pessoal",
          isCompleted: false,
        },
        {
          id:3,
          text: "Estudar React",
          category: "Estudos",
          isCompleted: false,
        }])

  return <div className="app">
    <h1>To-do-List</h1>
    <div className="todo-list">
      {todos.map((todo) => (
        <Todo todo={todo}/>
      ))}
    </div>
    <TodoForm/>
  </div>
}

export default App