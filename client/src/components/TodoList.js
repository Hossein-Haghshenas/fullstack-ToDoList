import { useEffect, useState } from "react";
import axios from "axios";

const TodoList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      axios.get("http://localhost:5000").then((res) => setData(res.data.todos));
    } catch (error) {}
  }, []);

  return (
    <section className="todo-list">
      <ul>
        {data?.map((todo) => {
          const { text, id } = todo;

          return (
            <li className="todo-item" key={id}>
              {text}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default TodoList;
