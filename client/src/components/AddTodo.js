import { useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";

const AddTodo = ({ handleNewTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    handleNewTodo(newTodo);
    setNewTodo("");
  };

  return (
    <section className="todo-input-container">
      <form>
        <input
          type="text"
          className="todo-input"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit" className="input-icon" onClick={handleClick}>
          <BsFillPlusCircleFill />
        </button>
      </form>
    </section>
  );
};

export default AddTodo;
