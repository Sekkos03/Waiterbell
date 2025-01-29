import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import HomePage from "./components/pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FAQ from "./components/pages/FAQ";
import Kontakt from "./components/pages/Kontakt";
import OmOss from "./components/pages/OmOss";
import RequestPage from "./components/pages/RequestPage";
import SeFordeler from "./components/pages/SeFordeler";
import SlikFungererDet from "./components/pages/SlikFungererDet";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/beompris" element={<RequestPage />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/omoss" element={<OmOss />} />
          <Route path="/Kontakt" element={<Kontakt />} />
          <Route path="/sefordeler" element={<SeFordeler />} />
          <Route path="/slikfungererdet" element={<SlikFungererDet />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
