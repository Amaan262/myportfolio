import React from "react";
import "./section2.css";
function Section2() {
  return (
    <section id="about">
      <div className="box-1">
        <div className="overlay overlay-2">
       </div>
      </div>

      <div className="box-2">
        <div className="overlay overlay-3"></div>
        <div className="about-details">
          <h1>About Me</h1>

          <h1>
            Hi
            <img
              id="hiGif"
              alt="icon"
              src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif"
              width="30px"
              />
            , I am Amaan Ahmad
          </h1>
          <h3>Web Developer | Problem solver</h3>

          <div id="skillsPara">
            <em>
              I'm <b>3rd year</b> Engineering Student in College of Technology,
              Pantnagar.
              <p>
                <br /> <b>A passionate self-learner</b> and a{" "}
                <b>Web Developer</b>
              </p>
            </em>
          </div>
          <br />
          <p id="skillsPara">
            ⚡ Fun fact : Beside's coding and developing stuff, I enjoy playing
            outdoor sports ⚽🏃‍♂️🏏 and traveling 🚘🏝️.
          </p>

          <br />
          <br />

          <img
            alt="icon"
            id="barsGif"
            src="https://media.giphy.com/media/iY8CRBdQXODJSCERIr/giphy.gif"
            width="30px"
            />
          <p id="skillsPara">
            ✔ Skilled with **C++**
            <br />
            ✔ A non CS/IT (by degree) guy doing **IT things...**
            <br />
            ✔ I’m currently learning **MERN Stack**
            <br />
          </p>

          <a href="#web-design">
            {" "}
            <button className="btn btn-1">
              {" "}
              <img src={process.env.PUBLIC_URL+"images/icons/contact_page_black_24dp.svg"} alt="img" />
              <p> See Portfolio </p>
            </button>
          </a>
          <a href="#contact">
            {" "}
            <button className="btn btn-2">
              {" "}
              <img src={process.env.PUBLIC_URL+"images/icons/contact_mail_black_24dp.svg"} alt="img" />
              <p> Contact me </p>
            </button>
          </a>
        </div>
      </div>
      {/*
       */}
    </section>
  );
}

export default Section2;
