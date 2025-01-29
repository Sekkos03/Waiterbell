import React from "react";
import "./SlikFungererDet.css";
import "./SeFordeler.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Footer from "../Footer";

const SlikFungererDet = () => {
  const features = [
    {
      title: "Tilkallingsenhet for gjestene",
      description:
        "Denne vanntette enheten har fire funksjoner: Pay, Order, Call og Cancel. Den er enkel å bruke med en ripebestandig touch-skjerm.",
      image: "/images/WB_forsiden.png",
    },
    {
      title: "Varslingsklokke for servitører",
      description:
        "En smartklokke som varsler når et bord trenger hjelp. Klokken vibrerer og viser hvilken funksjon som er aktivert, og gir servitørene full oversikt over alle varslinger.",
      image: "/images/WB_klokke-removebg-preview.png",
    },
  ];

  return (
    <>
      <div className="container">
        <h1 className="title">Slik fungerer det</h1>
        <h2 className="title">Om produktet</h2>
        <p className="header-text">
          Waiter Bell består av to hovedenheter som sikrer sømløs kommunikasjon
          mellom gjester og servitører.
        </p>

        <div className="feature">
          <h3>1) Tilkallingsenhet for gjestene:</h3>
          <p className="header-text">
            Vanntett enhet med fire funksjoner: Pay, Order, Call og Cancel.
            Touch skjermen er enkel å bruke og ripebestandig.
          </p>
          <img
            src="/images/WB_forsiden.png"
            alt="Tilkallingsenhet"
            className="feature-image"
          />
        </div>

        <div className="feature">
          <h3>2) Varslingsklokke for servitørene:</h3>
          <p className="header-text">
            En flerfunksjonell smartklokke som varsler hver gang et bord trenger
            hjelp. Klokken vibrerer og viser hvilken enhet som har tilkalt
            servitør, og har oversikt over alle varslinger.
          </p>
          <img
            src="/images/WB_klokke-removebg-preview.png"
            alt="Varslingsklokke"
            className="feature-image"
          />
        </div>

        <p className="header-text">
          Med Waiter Bell kan hvert bord enkelt tilkalle service, gjøre en
          bestilling, eller be om regningen - alt med et trykk.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default SlikFungererDet;
