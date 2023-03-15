import React from "react";
import "./Footer.css";
import Logo from "../../images/main-logo.png";


const Footer = () => {
  return (
   <footer className="footer">
    <div className="container">
        <div className="footer-row">
            <img src={Logo} alt="logo"/>
            <ul className="list-items">
                <li>Handcrafted with &#10084; in Chicago</li>
                <li>Powered by StudioPress</li>
            </ul>
            <ul className="social">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
            </ul>
        </div>
    </div>
   </footer>
  );
};

export default Footer;
