import React from "react";
// import logo from "./logoWhite.png";
function Navbar() {
  return (
    <nav id="navbar">
      <div className="logo">
        <a href="https:/amaan262.github.io/Amaan262/">
          <img src={process.env.PUBLIC_URL+"/images/img/logoWhite.png"} alt="Amaan Ahmad" />
        </a>
      </div>
      <ul>
        <li>
          <a id="homebutton" href="/">
            Home
          </a>
        </li>
        <li>
          <a href="#web-design" >Web Design</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#about">About Me</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
