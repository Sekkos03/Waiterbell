import React from "react";
import "../styles/Kontakt.css";
import mapImage from "../assets/Fred.jpg";

const Kontakt = () => {
  return (
    <div className="contact-page">
      <section className="partner-section">
        <h2>Are you interested in working with us?</h2>
        <p>Benefit by being a partner of our bonus programme.</p>
        <button>Become a Partner</button>
      </section>

      <section className="map-section">
        <img
          src={mapImage}
          alt="Location Map"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </section>

      <section className="contact-info">
        <h2>We are here for you.</h2>
        <address>
          WaiterBell GmbH
          <br />
          Street Address XX
          <br />
          City, Postcode
          <br />
          Country
          <br />
          <br />
          Phone: +XX XXXX XXXX
          <br />
          Email: contact@waiterbell.com
        </address>
        <p>
          Opening hours (phone): Monday - Friday: 09:00 AM - 6:00 PM (CET/CEST)
        </p>
      </section>
    </div>
  );
};

export default Kontakt;
