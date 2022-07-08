import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { createTodo } from "../api/todoApi";
import Filters from "./Filters";
import NewTodoForm from "./NewTodoForm";
import jwt_decode from "jwt-decode";

const AddTodo = ({ statusHandler, searchHandler }) => {
  const navigate = useNavigate();
  const [callStatus, setCallStatus] = useState(false);
  const [user, setUser] = useState("");

  useEffect(() => {
    const jwtToken = localStorage.getItem("access_key");
    const userInfo = jwt_decode(jwtToken);
    setUser(userInfo.username);
  }, [user]);

  const newTodo = (todoText, todotime) => {
    console.log(user);
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

  if (callStatus === true) {
    statusHandler(callStatus);
    navigate(0);
    setCallStatus(false);
  } else {
    statusHandler(callStatus);
  }

  return (
    <>
      <Filters searchHandler={searchHandler} />
      <NewTodoForm newTodo={newTodo} />
    </>
  );
};

export default AddTodo;
