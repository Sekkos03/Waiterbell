import React from "react";
import "../styles/HomePage.css";
import { Link } from "react-router-dom";
import SlikFungererDet from "../parts/SlikFungererDet";
import wb from "../assets/Mennesker.jpg";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <header className="hero-section">
        <img src={wb} alt="Smart Watch" className="hero-background" />
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>GREAT SERVICE STARTS WITH WAITERBELL</h1>
            <p>
              WaiterBell: smart waiter call system that helps improve service
              quality and manage staff shortages effectively.
            </p>
            <div className="hero-buttons">
              <Link to="/request" className="request-button">
                REQUEST NOW!
              </Link>
              <button className="video-button">WATCH VIDEO</button>
            </div>
          </div>
          <div className="scroll-indicator">↓</div>
        </div>
      </header>

      {/* Partner Logos Section */}
      <section className="partner-logos">
        <img src="/assets/logo1.png" alt="Partner 1" />
        <img src="/assets/logo2.png" alt="Partner 2" />
        <img src="/assets/logo3.png" alt="Partner 3" />
        <img src="/assets/logo4.png" alt="Partner 4" />
      </section>
    </div>
  );
};

export default HomePage;
