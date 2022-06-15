import { useEffect, useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import axios from "axios";

const History = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      axios
        .get("https://mytodolistapp2022.herokuapp.com/")
        .then((res) => setData(res.data.todos));
    } catch (error) {}
  }, []);

  return (
    <section className="container">
      <section className="todo-list">
        <ul>
          {data?.map((todo) => {
            const { text, _id, statusColor } = todo;
            return (
              statusColor === "#00ff15b7" && (
                <li
                  className="todo-item"
                  key={_id}
                  style={{ backgroundColor: `${statusColor}` }}
                >
                  <p>{text}</p>
                  <span className="todo-btns">
                    <BsCheckCircleFill />
                  </span>
                </li>
              )
            );
          })}
        </ul>
      </section>
    </section>
  );
};

export default History;
