import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AiFillDelete, AiFillStar } from "react-icons/ai";
import { deleteTodo } from "../api/todoApi";
import UpdateTodo from "./UpdateTodo";

const TodoList = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isBold, setIsBold] = useState(true);

  useEffect(() => {
    try {
      axios.get("http://localhost:5000").then((res) => setData(res.data.todos));
    } catch (error) {}
  }, []);

  const deleteHandler = (id) => {
    deleteTodo(id);
    navigate(0);
  };

  const starHandler = (id) => {
    setIsBold(!isBold);
    if (isBold) {
      document.getElementById(id).style.fontWeight = "700";
    } else {
      document.getElementById(id).style.fontWeight = "200";
    }
  };

  return (
    <section className="todo-list">
      <ul>
        {data?.map((todo) => {
          const { text, _id } = todo;
          return (
            <li className="todo-item" key={_id}>
              <p id={_id}>{text}</p>
              <span>
                <button className="delete-icon">
                  <AiFillDelete onClick={() => deleteHandler(_id)} />
                </button>
                <UpdateTodo id={_id} text={text} />
                <button className="star-icon">
                  <AiFillStar onClick={() => starHandler(_id)} />
                </button>
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default TodoList;
