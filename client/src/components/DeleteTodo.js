import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { deleteTodo } from "../api/todoApi";

const DeleteTodo = ({ todoId }) => {
  const navigate = useNavigate();
  const deleteHandler = (id) => {
    deleteTodo(id);
    navigate(0);
  };
  return (
    <>
      <button className="delete-icon">
        <AiFillDelete onClick={() => deleteHandler(todoId)} />
      </button>
    </>
  );
};

export default DeleteTodo;
