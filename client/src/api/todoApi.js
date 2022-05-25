import axios from "axios";

const baseUrl = "http://localhost:5000";

const createTodo = (todo) => {
  try {
    axios.post(baseUrl, todo);
  } catch (error) {
    console.log(error);
  }
};

const deleteTodo = (id) => {
  try {
    axios.delete(`${baseUrl}/${id}`);
  } catch (error) {
    console.log(error);
  }
};

const updateTodos = (id, todo) => {
  try {
    axios.patch(`${baseUrl}/${id}`, todo);
  } catch (error) {
    console.log(error);
  }
};

export { createTodo, deleteTodo, updateTodos };
