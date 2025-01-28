import "../styles/Navbar.css";
import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import Logo from "../assets/Logo.png";


class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  
  render() {

    return (
      <nav className="NavbarItems">
        <div className="logo-container">
          <Link to="/"> 
         <img
          src={Logo} // Replace with your logo path
          alt="Logo"
          className="logo"
         />
        </Link> 
        <Link to="/">
        <h1 className="navbar-logo">Waiter bell</h1>
        </Link>
      </div>
        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
