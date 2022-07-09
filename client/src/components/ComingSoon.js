import React from "react";

function ComingSoon() {
  return (
    <section className="d-flex flex-column justify-content-center align-items-center mt-5">
      <img
        className="notodo-img"
        src={require("../image/coming_soon.png")}
        alt=""
      />
      <h2>Coming Soon...</h2>
      <p>Contact me for more information 😁</p>
    </section>
  );
}

export default ComingSoon;
