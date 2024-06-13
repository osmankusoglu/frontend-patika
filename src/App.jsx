<<<<<<< HEAD
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
=======
import "./App.css";
import Home from "./components/Home/Home.jsx";
import "../output.css";
import Header from "./components/Header/Header.jsx";
import Statistics from "./components/Statistic/Statistic.jsx";
import Classes from "./components/Classes/Classes.jsx";
import BMI from "./components/BMI/BMI.jsx";
import Trainer from "./components/Trainer/Trainer.jsx";
import Purchase from "./components/Purchase/Purchase.jsx";
import Review from "./components/Review/Review.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Statistics />
      <Classes />
      <BMI />
      <Trainer />
      <Purchase />
      <Review />
      <Contact />
      <Footer />
    </>
>>>>>>> 42bc6c363acb7498c920d11a3d72fb0517c6ece0
  );
}

export default App;
