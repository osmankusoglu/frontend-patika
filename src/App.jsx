import { useState } from "react";
import "./App.css";
import TodoAdd from "./Components/TodoAdd";
import TodoList from "./Components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id !== todoId)]);
  };

  const updateTodo = (newTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id !== newTodo.id) {
        return todo;
      }
      return newTodo;
    });
    setTodos([...updatedTodos]);
  };

  return (
    <div className="App">
      <div className="main">
        <br />
        <TodoAdd onAddTodo={addTodo} />
        <TodoList
          todos={todos}
          onRemoveTodo={removeTodo}
          onUpdateTodo={updateTodo}
        />
        <br />
      </div>
    </div>
  );
}

export default App;
