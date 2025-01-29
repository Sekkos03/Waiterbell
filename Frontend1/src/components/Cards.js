import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Slik fungerer det</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/WB_forsiden.png"
              text="Denne vanntette enheten har fire funksjoner: Pay, Order, Call og Cancel. Den er enkel å bruke med en ripebestandig touch-skjerm."
              label="Tilkallingsenhet for gjestene"
            />
            <CardItem
              src="images/WB_klokke-removebg-preview.png"
              text="En smartklokke som varsler når et bord trenger hjelp. Klokken vibrerer og viser hvilken funksjon som er aktivert, og gir servitørene full oversikt over alle varslinger."
              label="Varslingsklokke for servitører"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
