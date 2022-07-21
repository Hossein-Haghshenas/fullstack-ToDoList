import { Button, Grid, Input, Loading, Text } from "@nextui-org/react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { login } from "../api/authApi";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loadingMod, setLoadingMod] = useState(false);

  const loginHandler = async () => {
    setLoadingMod(true);
    const userInfo = {
      username,
      password,
    };
    await login(userInfo).then((res) => {
      localStorage.setItem("access_key", res.data.token);
    });
    navigate("/");
    navigate(0);
    setLoadingMod(false);
  };

  return (
    <section className="login-page bg-dark text-secondary d-flex flex-column justify-content-center align-items-center">
      <form className="login-form bg-white">
        {loadingMod ? (
          <Grid>
            <Loading color="secondary" textColor="secondary">
              Please wait
            </Loading>
          </Grid>
        ) : (
          <>
            <section className="login-inputs mt-1">
              <Grid className="mb-4 w-75">
                <Input
                  fullWidth
                  bordered
                  labelPlaceholder="Username"
                  color="secondary"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Grid>
              <Grid className="m-2 w-75">
                <Input.Password
                  fullWidth
                  bordered
                  color="secondary"
                  type="password"
                  labelPlaceholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
            </section>
            <section className="login-btns w-100 d-flex flex-column align-items-center">
              <Grid className="d-flex justify-content-center w-100">
                <Button
                  className="w-75"
                  color="gradient"
                  auto
                  ghost
                  onPress={loginHandler}
                >
                  login
                </Button>
              </Grid>
              <Grid className="mt-2">
                <Text className="d-flex" size={12} color="black">
                  <span>Not registered yet ?</span>
                  <span className="ms-1 signup-link">
                    <NavLink to="/register">Create an Account</NavLink>
                  </span>
                </Text>
              </Grid>
            </section>
          </>
        )}
      </form>
    </section>
  );
}

export default Login;
