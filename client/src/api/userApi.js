import axios from "axios";

const baseUrl = "https://mytodolistapp2022.herokuapp.com";

const createUser = (data) => {
  try {
    const status = axios
      .post(`${baseUrl}/register`, data)
      .then((data) => data.status === 200 && true);
    return status;
  } catch (error) {
    console.log(error);
  }
};

const updateUser = (id, user, navigate) => {
  try {
    axios
      .patch(`${baseUrl}/user/${id}`, user)
      .then((data) => data.status === 200 && navigate(0));
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = (id, navigate) => {
  try {
    axios
      .delete(`${baseUrl}/admin/${id}`)
      .then((data) => data.status === 200 && navigate(0));
  } catch (error) {
    console.log(error);
  }
};

export { createUser, deleteUser, updateUser };
