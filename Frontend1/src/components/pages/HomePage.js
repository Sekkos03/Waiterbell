import React from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import FAQ from "./FAQ";
import SeFordeler from "./SeFordeler";
import PartnerSection from "../PartnerSection";

function HomePage() {
  return (
    <>
      <HeroSection />
      <PartnerSection />
      <Cards />
      <Footer />
    </>
  );
}

export default HomePage;
