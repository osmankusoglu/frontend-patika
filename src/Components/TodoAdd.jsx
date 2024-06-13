import { useState } from "react";
import "../App.css";

function TodoAdd({ onAddTodo }) {
  const [newTodo, setNewTodo] = useState("");
  const clearInput = () => {
    setNewTodo("");
  };

  const addTodo = () => {
    if (!newTodo) return;

    const request = {
      id: Math.floor(Math.random() * 99999999),
      content: newTodo,
    };
    onAddTodo(request);
    clearInput();
  };

  return (
    <div className="todo-add">
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="todo-input"
        type="text"
        placeholder="What needs to be done?"
      />
      <button onClick={addTodo} className="todo-add-button">
        Add
      </button>
    </div>
  );
}

export default TodoAdd;
