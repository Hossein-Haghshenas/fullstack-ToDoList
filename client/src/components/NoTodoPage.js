import React from "react";

function NoTodoPage({ username }) {
  return (
    <section className="text-center">
      <img
        className="notodo-img"
        src={require("../image/undraw_Post_re_mtr4-removebg-preview.png")}
        alt=""
      />
      <h2>welcome {username} </h2>
      <p>Create your first Todo</p>
    </section>
  );
}

export default NoTodoPage;
