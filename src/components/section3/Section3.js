import React from "react";
import Project from "../project/Project";
import "./section3.css";

function Section3() {
  return (
    <>
      <section id="web-design">
        <h1 className="heading text-center">Web Design</h1>
        <div className="container-xyz">
          <div className="overlay overlay-5"></div>
          <h1>Projects</h1>
          <div className="container">
           <Project/>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section3;
