import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { createTodo } from "../api/todoApi";
import Filters from "./Filters";
import NewTodoForm from "./NewTodoForm";
import { userInfo } from "./AuthChecker";

const AddTodo = ({ statusHandler, searchHandler }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [callStatus, setCallStatus] = useState(false);

  useEffect(() => {
    setUser(userInfo.username);
  }, [user]);

  const newTodo = (todoText, todotime) => {
    const setNewTodo = {
      user,
      id: nanoid(),
      text: todoText,
      time: todotime,
      date: new Date(),
      statusColor: "#7828c84b",
    };
    createTodo(setNewTodo).then((status) => status && setCallStatus(true));
  };

  useEffect(() => {
    if (callStatus === true) {
      statusHandler(callStatus);
      navigate(0);
      setCallStatus(false);
    } else {
      statusHandler(callStatus);
    }
  }, [callStatus]);

  return (
    <>
      <Filters searchHandler={searchHandler} />
      <NewTodoForm newTodo={newTodo} />
    </>
  );
};

export default AddTodo;
