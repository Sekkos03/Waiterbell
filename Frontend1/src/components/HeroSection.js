import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>GREAT SERVICE STARTS WITH WAITERBELL</h1>
      <p>WaiterBell: smart waiter call system that helps improve service quality and manage staff shortages effectively.</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Be om pris
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          Se video <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
