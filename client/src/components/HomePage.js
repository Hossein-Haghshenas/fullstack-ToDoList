import React from "react";
import Footer from "./Footer";

function HomePage() {
  return (
    <section className="home-page">
      <section className="home-container flex-sm-row">
        <section className="home-page-img mt-sm-0">
          <img src={require("../image/home-decor.png")} alt="" />
        </section>
        <section className="home-page-text me-sm-5 mt-sm-0 d-flex flex-column align-items-sm-start text-white text-sm-start">
          <section>
            <h1 className="">
              Manage Your Tasks With <br /> Task Manager
            </h1>
          </section>
          <section className="mt-2">
            <h5>Done your tasks cool and powerful</h5>
          </section>
          <section className="get-start-btn mt-4">
            <button>Get Start Now !</button>
          </section>
        </section>
      </section>
      <Footer />
    </section>
  );
}

export default HomePage;
