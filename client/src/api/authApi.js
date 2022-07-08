import axios from "axios";

const baseUrl = "https://mytodolistapp2022.herokuapp.com";

const signUp = (data) => {
  try {
    const status = axios
      .post(`${baseUrl}/register`, data)
      .then((data) => data.status === 200 && true);
    return status;
  } catch (error) {
    console.log(error);
  }
};

const login = async (data) => {
  try {
    const status = axios.post(`${baseUrl}/login`, data).then((data) => data);
    return status;
  } catch (error) {
    console.log(error);
  }
};

export { signUp, login };
