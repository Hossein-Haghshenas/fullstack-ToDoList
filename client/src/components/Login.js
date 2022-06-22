import { Button, Grid, Input, Text } from "@nextui-org/react";
import React from "react";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <section className="login-page bg-dark text-secondary d-flex flex-column justify-content-center align-items-center">
      <form className="login-form bg-white">
        <section className="login-inputs mt-1">
          <Grid className="mb-4 w-75">
            <Input
              fullWidth
              bordered
              labelPlaceholder="Username"
              color="secondary"
            />
          </Grid>
          <Grid className="m-2 w-75">
            <Input.Password
              fullWidth
              bordered
              color="secondary"
              type="password"
              labelPlaceholder="Password"
            />
          </Grid>
        </section>
        <section className="login-btns w-100 d-flex flex-column align-items-center">
          <Grid className="d-flex justify-content-center w-100">
            <Button className="w-75" color="gradient" auto ghost>
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
      </form>
    </section>
  );
}

export default Login;
