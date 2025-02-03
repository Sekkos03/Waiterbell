import "./styles.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RequestPage from "./pages/RequestPage"; // Sørg for at denne filen finnes

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/requestpage" element={<RequestPage />} />
      </Routes>
    </Router>
  );
}

export default App;
