import React, { useState } from "react";
import "./RequestPage.css";
import "./HomePage.css";
import axios from "axios";
import logo from "../asset/Logo_WB_US.png";
import Logo_medT from "../asset/Logo_medT.png";
import Logo_WB from "../asset/Logo_WB.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button2";
import Logo_WB_US from "../asset/Logo_WB_US.png";

const RequestPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const scrollToSection1 = () => {
    document.getElementById("omoss").scrollIntoView({ behavior: "smooth" });
  };
  const scrollToSection2 = () => {
    document.getElementById("kontakt").scrollIntoView({ behavior: "smooth" });
  };

  const handleRequestPage = () => {
    navigate("/");
  };
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  const [formData, setFormData] = useState({
    resturantName: "",
    numTables: "",
    numBells: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage("");
    try {
      const response = await axios.post(
        "http://localhost:8080/request",
        formData
      );
      console.log("Submitted successfully", response.data);
      setMessage("Submitted successfully!");
      setFormData({
        resturantName: "",
        numTables: "",
        numBells: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      });
    } catch (error) {
      console.error("Error submitting form", error);
      setMessage("Failed to submit the form. Please try again.");
    }
    setSubmitting(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={Logo_WB_US} alt="Icon" />
            Waiter Bell
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link className="nav-links" onClick={scrollToSection1}>
                Om oss
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links" onClick={scrollToSection2}>
                Kontakt
              </Link>
            </li>

            <li>
              <Link
                to="/"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Hjem
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Hjem</Button>}
        </div>
      </nav>
      <div className="request-page">
        <div className="request-container">
          {/* Venstre side - Logo */}
          <div className="logo-container">
            <img src={logo} alt="Waiter Bell Logo" className="logo-img" />
          </div>

          {/* Midtdel - Skjema */}
          <div className="form-container">
            <h1>Be om pris</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="number"
                name="numTables"
                placeholder="Antall bord"
                value={formData.numTables}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                name="numBells"
                placeholder="Antall Klokker"
                value={formData.numBells}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="firstName"
                placeholder="Fornavn"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Etternavn"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Telefonnummer"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Epost"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="resturantName"
                placeholder="Restaurant navn"
                value={formData.resturantName}
                onChange={handleChange}
                required
              />
              <button type="submit" disabled={submitting}>
                <strong>Send</strong>
              </button>
              {message && <p className="message">{message}</p>}
            </form>
          </div>

          {/* Høyre side - Slagord */}
          <div className="slogan-container">
            <h2>Order,</h2>
            <h2>Pay, and</h2>
            <h2>Call with</h2>
            <h2>One Click.</h2>
          </div>
        </div>
      </div>
      <section className="about-section" id="omoss">
        <div className="container">
          {/* Venstre side - Om oss */}
          <div className="about-text">
            <h2>Om oss</h2>
            <p>
              Waiter Bell er et norsk selskap som tilbyr fleksibel kommunikasjon
              mellom gjester og servitør.
            </p>
            <p>
              <strong>Mål:</strong> Å gi restauranter, barer og hoteller
              muligheten til å forbedre
            </p>
            <p>Serviceopplevelsen er det som får kunden til å komme tilbake.</p>

            {/* Plassering av logo under teksten */}
            <div className="about-logo">
              <img src={Logo_medT} alt="Waiter Bell Logo" />
            </div>
          </div>

          {/* Høyre side - Hvorfor velge oss */}
          <div className="why-choose-text">
            <h2>Hvorfor velge oss?</h2>
            <p>
              <strong>Reduser ventetid:</strong> Unngå at gjester venter for
              lenge med å få oppmerksomhet.
            </p>
            <p>
              <strong>Enkelt og effektivt:</strong> Bestilling og betaling med
              ett klikk.
            </p>
            <p>
              <strong>Bedre oversikt:</strong> Servitører har full oversikt over
              alle forespørsler.
            </p>
            <p>
              <strong>Økt kapasitet:</strong> Gjør det enklere for servitører å
              betjene flere gjester.
            </p>
            <p>
              <strong>VIP-opplevelse:</strong> Gjestene føler seg ivaretatt uten
              å måtte vente.
            </p>
          </div>
        </div>
      </section>
      {/* Kontakt Section */}
      <section className="contact-section text-center py-5" id="kontakt">
        <div className="container">
          <h2 className="contact-title">Kontakt</h2>
          <div className="row mt-5">
            <div className="col-md-4 contact-item">
              <h3>Stephan Kovac</h3>
              <p>Daglig leder</p>
              <p>Tlf: +47 455 10 294</p>
              <p>E-post: stephan@waiterbell.no</p>
            </div>
            <div className="col-md-4 contact-item">
              <h3>Josef Missoum</h3>
              <p>Salgsjef</p>
              <p>Tlf: +47 929 70 458</p>
              <p>E-post: josef@waiterbell.no</p>
            </div>
            <div className="col-md-4 contact-item">
              <h3>Alexander Eliassen</h3>
              <p>Økonomisjef</p>
              <p>Tlf: +47 403 40 825</p>
              <p>E-post: alexander@waiterbell.no</p>
            </div>
          </div>
          <div className="contact-logo mt-5">
            <img
              src={Logo_WB}
              alt="Waiter Bell Logo"
              className="contact-logo-img"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default RequestPage;
