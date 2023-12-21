import React from "react";
import services from "./services.css";
import folder1 from "./pics/folder1.jpg";
import msg from "./pics/msg.jpg";

export default function Services() {
  return (
    <div className="services-container">
      <div className="services-file">
        <img src={folder1} />

        <div className="services-content">
          <p className="services-title">
            NAM VEL ANTE SIT AMET LIBERO SCELERISQUE FACILISIS ELEIFEND VITAE
            URNA
            <hr className="services-strip" />
          </p>
          <h1 className="services-header">Project NOVA</h1>
          <p className="services-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor
            sit amet consectetur adipiscing elit duis tristique sollicitudin
            nibh. Aliquet nibh praesent tristique magna. Nulla posuere
            sollicitudin aliquam ultrices. Morbi leo urna molestie at elementum
            eu facilisis sed.
          </p>
          <button className="services-btn">Try It Out</button>
        </div>
      </div>
      <div className="services-msg">
        <img src={msg} />

        <div className="services-content">
          <p className="services-title">
            NAM VEL ANTE SIT AMET LIBERO SCELERISQUE FACILISIS ELEIFEND VITAE
            URNA
            <hr className="services-strip" />
          </p>
          <h1 className="services-header">Project NOVA</h1>
          <p className="services-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor
            sit amet consectetur adipiscing elit duis tristique sollicitudin
            nibh. Aliquet nibh praesent tristique magna. Nulla posuere
            sollicitudin aliquam ultrices. Morbi leo urna molestie at elementum
            eu facilisis sed.
          </p>
          <button className="services-btn">Try It Out</button>
        </div>
      </div>
    </div>
  );
}
