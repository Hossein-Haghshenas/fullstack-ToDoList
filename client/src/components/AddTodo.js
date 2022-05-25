import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { createTodo } from "../api/todoApi";

const AddTodo = ({ handleNewTodo }) => {
  const navigate = useNavigate();
  const [newTodoText, setNewTodoText] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    newTodoText !== ""
      ? newTodo(newTodoText)
      : alert("Please enter something !");
    setNewTodoText("");
  };

  const newTodo = (todoText) => {
    const setNewTodo = {
      id: nanoid(),
      text: todoText,
    };
    createTodo(setNewTodo);
    navigate(0);
  };

  return (
    <section className="todo-input-container">
      <form>
        <input
          type="text"
          className="todo-input"
          placeholder="new Todo"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <button type="submit" className="input-icon" onClick={handleClick}>
          <AiOutlinePlusCircle />
        </button>
      </form>
    </section>
  );
};

export default AddTodo;
