import React from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import "./Kontakt.css";
import "./OmOsss.css";
import "./SeFordeler.css";

function Kontakt() {
  return (
    <>
      <div className="container">
        <div className="intro">
          <h1 className="title">Er du interssert?</h1>
          <p className="header-text">Få noe ut av dette her</p>
          <button className="partner-btn">BLI EN KUNDE</button>
        </div>
        <div className="info-section">
          <div className="info-image">
            <img src="/images/Waiterbell.JPG" alt="Placeholder" />
          </div>
          <div className="info-text">
            <h2 className="title">VI ER HER FOR DEG.</h2>
            <address>
              <p className="header-text">WaiterBell GmbH</p>
              <p className="header-text">Adresse: Josef-Neumeier-Str. 15b</p>
              <p className="header-text">85664 Hohenlinden, Bavaria, Germany</p>
              <p className="header-text">Phone: +49 89 9545 701 25</p>
              <p className="header-text">Email: hello@waiterbell.com</p>
            </address>
            <p className="hours">
              Opening hours (phone):
              <br />
              Monday – Friday: 09:00 AM – 6:00 PM (CET/CEST)
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Kontakt;
