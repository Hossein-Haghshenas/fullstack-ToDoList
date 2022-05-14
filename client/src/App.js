import { useState } from "react";
import { nanoid } from "nanoid";
import Container from "./components/Container";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([
    {
      id: nanoid(),
      text: "first work",
    },
  ]);

  const newTodo = (todoText) => {
    const setNewTodo = {
      id: nanoid(),
      text: todoText,
    };

    setTodo([...todo, setNewTodo]);
  };

  return (
    <>
      <Container todoList={todo} handleNewTodo={newTodo} />
    </>
  );
}

export default App;
