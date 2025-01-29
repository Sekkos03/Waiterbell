import React from "react";
import "./SeFordeler.css";
import Footer from "../Footer";

const StatCircle = ({ percentage, title, description }) => {
  return (
    <div className="stat">
      <div className="circle">
        <span className="percentage">{percentage}%</span>
      </div>
      <div className="info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

function SeFordeler() {
  return (
    <>
      <div className="container">
        <h1 className="title">Fordeler</h1>
        <div className="header">
          <p className="header-text">
            As experience shows the Ordercube system affects the restaurant
            experience in a positive way: for guests, waitstaff and restaurant
            manager. Ordercube increases the guest satisfaction in restaurants,
            hotels and bars due to less waiting time and a relaxed atmosphere.
            Additionally the waitstaff is happier and more motivated and last
            but not least the revenue increases due to more orders.
          </p>
        </div>
        <div className="stats">
          <StatCircle
            percentage="80"
            title="LESS WAITING TIME"
            description="Thanks to the maximum possible overview guaranteed by the Ordercube system. Due to the fast service the guests feel royally treated."
          />
          <StatCircle
            percentage="40"
            title="MORE TIPS"
            description="Faster service and good mooded staff lead to higher customer satisfaction. Resultant the guests give better ratings."
          />
          <StatCircle
            percentage="19"
            title="INCREASE REVENUE"
            description="Due to more orders and higher table frequency in busy periods. 80% of additional orders are high-margin beverage sales."
          />
        </div>
        <button className="improve-button">IMPROVE YOUR BUSINESS!</button>
      </div>
      <Footer />
    </>
  );
}

export default SeFordeler;
