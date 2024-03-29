import { useEffect, useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { getTodo } from "../api/todoApi";
import { userInfo } from "./AuthChecker";

const History = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(userInfo.username);

    user &&
      getTodo(user).then((res) => {
        setStatus(res.status);
        setData(res.data.todos);
      });
  }, [user]);

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
