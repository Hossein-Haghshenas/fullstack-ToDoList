import { useNavigate } from "react-router-dom";
import { updateTodos } from "../api/todoApi";
import TimerFunctions from "./TimerFunctions";

const Timer = ({ timeValue, dateValue, todoId, colorHandler }) => {
  const navigate = useNavigate();

  const statusHandler = (id, totalTime, color) => {
    if (color !== "#00ff15b7" && totalTime === 0) {
      const addNewTime = {
        statusColor: "#ff0000a9",
      };
      updateTodos(id, addNewTime);
      navigate(0);
    }
  };

  const onClickReset = (id, color) => {
    const addNewTime = {
      time: 0,
      statusColor: "#00ff15b7",
    };
    if (timeValue !== 0 && color !== "#ff0000a9") {
      updateTodos(id, addNewTime);
      navigate(0);
    }
  };

  return (
    <span>
      <span
        className="todo-timer"
        onClick={() => onClickReset(todoId, colorHandler)}
      >
        <TimerFunctions
          values={{ timeValue, dateValue, todoId, colorHandler }}
          statusHandler={statusHandler}
        />
      </span>
    </span>
  );
};

export default Timer;
