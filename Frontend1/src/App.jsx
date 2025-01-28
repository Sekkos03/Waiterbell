import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./routes/HomePage";
import RequestPage from "./routes/RequestPage";
import FAQ from "./parts/FAQ";
import Kontakt from "./parts/Kontakt";
import OmOss from "./parts/OmOss";
import SlikFungererDet from "./parts/SlikFungererDet";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/slikfungererdet" element={<SlikFungererDet />} />
        <Route path="/request" element={<RequestPage />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/omoss" element={<OmOss />} />
      </Routes>
    </Router>
  );
};

export default App;
