import TodoItem from "./todo-item.jsx";

function App() {
  return (
    <div>
      <h1>My To-Do List</h1>
      <ul>
        <TodoItem text="Learn React" />
        <TodoItem text="Build a project" />
        <TodoItem text="Earn an Internship!" />
      </ul>
    </div>
  );
}

export default App;