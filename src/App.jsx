import TodoItem from "./todo-item.jsx"
import { useState } from "react"
import "./App.css"

function App() {
  const [todos, setTodos] = useState([
    "learn React",
    "Build a project",
    "Earn an internship",
  ]);
  
  const [input, setInput] = useState("")

  function handleAddTodo() {
    if (input.trim() === "") return; //prevents adding empty todos
    setTodos([...todos, input]); 
    setInput("") //clear input field after adding
  }

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Add a new todo"
        />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo, idx) => (
          <TodoItem key={idx} text={todo} />
        ))}
      </ul>
    </div>
  );
  
}

export default App;