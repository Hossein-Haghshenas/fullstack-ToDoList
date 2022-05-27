import { useEffect, useState } from "react";
import axios from "axios";
import { AiFillStar } from "react-icons/ai";
import UpdateTodo from "./UpdateTodo";
import DeleteTodo from "./DeleteTodo";
import Timer from "./Timer";

const TodoList = () => {
  const [data, setData] = useState([]);
  const [isBold, setIsBold] = useState(false);
  const [boldElement, setBoldElement] = useState("");

  useEffect(() => {
    try {
      axios.get("http://localhost:5000").then((res) => setData(res.data.todos));
    } catch (error) {}
  }, []);

  const starHandler = (id) => {
    setIsBold(!isBold);
    setBoldElement(id);
  };

  return (
    <section className="todo-list">
      <ul>
        {data?.map((todo) => {
          const { text, _id, time, date, statusColor } = todo;
          return (
            <li
              className="todo-item"
              key={_id}
              style={{ backgroundColor: `${statusColor}` }}
            >
              <p>
                {_id === boldElement && isBold === true ? <b>{text}</b> : text}
              </p>
              <span className="todo-options">
                <span className="todo-btns">
                  <DeleteTodo todoId={_id} />
                  <UpdateTodo todoId={_id} text={text} />
                  <button
                    className="star-icon"
                    onClick={() => starHandler(_id)}
                  >
                    <AiFillStar />
                  </button>
                </span>
                {time !== null && (
                  <Timer
                    timeValue={time}
                    dateValue={date}
                    todoId={_id}
                    colorHandler={statusColor}
                  />
                )}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default TodoList;
