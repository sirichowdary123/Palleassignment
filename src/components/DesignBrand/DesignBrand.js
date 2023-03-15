import React from "react";
import "./DesignBrand.css";
import Logo1 from "../../images/logo1.png";
import Logo2 from "../../images/logo2.png";
import Logo3 from "../../images/logo3.png";
import Logo4 from "../../images/logo4.png";
import Logo5 from "../../images/logo5.png";
import Logo6 from "../../images/logo6.png";

const DesignBrand = () => {
  return (
    <div className="design-brand">
      <div className="container">
        <h1 className="design-brand__header">We design brands.</h1>
        <p className="design-brand__desc">A simple look is all vou need to crush your competition.</p>
        <span className="section__divider"></span>
        <div className="design-brand__logos">
            <img src={Logo1} alt="Logo"/>
            <img src={Logo2} alt="Logo"/>
            <img src={Logo3} alt="Logo"/>
            <img src={Logo4} alt="Logo"/>
            <img src={Logo5} alt="Logo"/>
            <img src={Logo6} alt="Logo"/>
        </div>
      </div>
    </div>
  );
};


export default DesignBrand;
