import React from "react";
import "./section1.css";
import Navbar from "../Navbar/Navbar";


function section1() {
  return (
    <>
      <section className="landing-page">
        <div className="overlay overlay-1">
        </div>
        <Navbar/>
        <div className="landing-page-details">
          <h1>
            AMAAN <br/> AHMAD
          </h1>
          <p>Web Developer. Coder.</p>
        </div>
      </section>
    </>
  );
}

export default section1;
