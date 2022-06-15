import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { createTodo } from "../api/todoApi";

const AddTodo = ({ handleNewTodo }) => {
  const navigate = useNavigate();
  const [newTodoText, setNewTodoText] = useState("");
  const [timer, setTimer] = useState(false);
  const [newTodoTime, setNewTodoTime] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();
    newTodoText !== ""
      ? newTodo(newTodoText, newTodoTime)
      : alert("Please enter something !");
    setNewTodoText("");
  };

  const newTodo = (todoText, todotime) => {
    const setNewTodo = {
      id: nanoid(),
      text: todoText,
      time: todotime,
      date: new Date(),
      statusColor: "#7828c84b",
    };
    createTodo(setNewTodo, navigate);
  };

  const hidden = timer ? { visibility: "hidden" } : { visibility: "visible" };
  const visible = timer ? { visibility: "visible" } : { visibility: "hidden" };

  return (
    <section className="todo-container">
      <form>
        <section className="todo-input-container">
          <input
            type="text"
            className="todo-input"
            placeholder="new Todo"
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
          />
          <button
            type="submit"
            className="todo-input-btn"
            onClick={handleClick}
          >
            <AiOutlinePlusCircle />
          </button>
        </section>
        <section className="todo-input-container">
          <section className="check-box-container">
            <input
              type="checkbox"
              className="todo-input-btn timer-checkbox"
              name="timer"
              onClick={() => setTimer(!timer)}
            />
            <label style={hidden} htmlFor="timer" className=" timer-lable">
              Todo Timer
            </label>
          </section>

          <input
            type="number"
            className="todo-input todo-timer-input"
            placeholder="How much minutes ? "
            onChange={(e) => setNewTodoTime(e.target.value * 60)}
            style={visible}
          />
        </section>
      </form>
    </section>
  );
};

export default AddTodo;
