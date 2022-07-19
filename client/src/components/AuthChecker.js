import jwt_decode from "jwt-decode";

const jwtToken = localStorage.getItem("access_key");
const userInfo = jwt_decode(jwtToken);

export { userInfo };
