import axios from "axios";

const baseUrl = "https://mytodolistapp2022.herokuapp.com";

const getTodo = (user) => {
  try {
    const status = axios.get(`${baseUrl}/${user}`);
    return status;
  } catch (error) {
    console.log(error);
  }
};

const createTodo = (todo) => {
  try {
    const status = axios
      .post(baseUrl, todo)
      .then((data) => data.status === 200 && true);
    return status;
  } catch (error) {
    console.log(error);
  }
};

const deleteTodo = (id, navigate) => {
  try {
    axios
      .delete(`${baseUrl}/${id}`)
      .then((data) => data.status === 200 && navigate(0));
  } catch (error) {
    console.log(error);
  }
};

const updateTodos = (id, todo, navigate) => {
  try {
    axios
      .patch(`${baseUrl}/${id}`, todo)
      .then((data) => data.status === 200 && navigate(0));
  } catch (error) {
    console.log(error);
  }
};

export { getTodo, createTodo, deleteTodo, updateTodos };
