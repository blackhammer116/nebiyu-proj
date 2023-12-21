import React from "react";
import logo from "./pic/logo2.png";
import landing from "./landing.css";

export default function Landing() {
  return (
    <div className="header">
      <div className="nav-items">
        <div className="logo-name">
          <img src={logo} className="logo" />
          {/* <h2>Name</h2> */}
        </div>
        <div className="menu-items">
          <ul>
            <li>About</li>
            <li>Services</li>
            <li>Contact Us</li>
            <li>Sign In</li>
          </ul>
        </div>
      </div>
      <div className="message">
        <h1>where your catch phrases go </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button>Read More</button>
      </div>
    </div>
  );
}
