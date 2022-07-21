import jwt_decode from "jwt-decode";

const jwtToken = localStorage.getItem("access_key");
const userInfo = jwtToken && jwt_decode(jwtToken);

export { jwtToken, userInfo };
