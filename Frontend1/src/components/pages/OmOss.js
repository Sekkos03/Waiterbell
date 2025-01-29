import React from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import "./OmOsss.css";
import "./SeFordeler.css";

function OmOss() {
  return (
    <>
      <div className="container">
        <h1 className="title">Om oss</h1>
        <h2 className="title">Hvorfor velge oss?</h2>
        <p className="header-text">
          Unngå lang ventetid for gjester å bestille. Vi tilbyr en sømløs og
          effektiv løsning som gir bedre oversikt og kontroll.
        </p>
        <p className="header-text">
          Servitørene får dynamisk kommunikasjon med gjestene, noe som reduserer
          stress og forbedrer opplevelsen for alle.
        </p>

        <h2 className="title">Hvem vi er</h2>
        <p className="header-text">
          Waiter Bell er et norsk selskap dedikert til å forbedre
          servicekvaliteten i restaurant- og hotellbransjen. Vi brenner for å gi
          gjestene en raskere og mer personlig serviceopplevelse.
        </p>

        <h2 className="title">Hvem vi selger til</h2>
        <p className="header-text">
          Våre løsninger er designet for restauranter, hoteller, og barer som
          ønsker å gi en førsteklasses opplevelse til sine gjester. Vi hjelper
          dem med å møte utfordringer som personalmangel og høy
          arbeidsbelastning.
        </p>
        <div className="image-section">
          <img src="/images/Waiterbell.JPG" alt="Om oss" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default OmOss;
