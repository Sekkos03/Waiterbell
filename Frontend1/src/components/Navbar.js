import React, { useState, useEffect, useRef } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
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

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src="/images/LOGO.ico" alt="Icon" />
            Waiter Bell
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/slikfungererdet"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Slik fungerer det
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sefordeler"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Se fordeler
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/omoss" className="nav-links" onClick={closeMobileMenu}>
                Om oss
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/faq" className="nav-links" onClick={closeMobileMenu}>
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/kontakt"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Kontakt
              </Link>
            </li>

            <li>
              <Link
                to="/beompris"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Be om pris
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Be om pris</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
