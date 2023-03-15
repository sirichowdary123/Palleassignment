import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import menu from "../../images/icon-menu.png";
import close from "../../images/icon-close.png";
import Logo from "../../images/header-logo.png"
const Header = () => {
  const onToggleclick = () => {
    const hamburger = document.querySelector(".hamburger");
    const navLink = document.querySelector(".nav__link");
    if (hamburger && navLink) {
      navLink.classList.toggle("hide");
      if (hamburger.classList.contains("expanded")) {
        hamburger.classList.remove("expanded");
      } else {
        hamburger.classList.add("expanded");
      }
    }
  };
  return (
    <header>
      <nav className="navbar">
          <img  className="logo" src={Logo} alt="Logo" />
        <div className="hamburger" onClick={onToggleclick}>
          <div className="menu">
            <img src={menu} className="menu" alt="hamburger" />
          </div>
          <div className="close">
            <img src={close} className="close" alt="close" />
          </div>
        </div>

        <div className="nav__link hide">
          <Link to="/home" >Sample</Link>
          <Link to="/home" >Features</Link>
          <Link to="/home" >Layouts</Link>
          <Link to="/home" >Our Shop</Link>
          <Link to="/home" >By Theme</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
