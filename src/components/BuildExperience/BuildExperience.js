import React from "react";
import "./BuildExperience.css";

const BuildExperience = () => {
    const dataCards = [
        {
            title:"DESIGN",
            desc: "With an emphasis on typography, white space, and mobile-optimized design, your website will look absolutely breathtaking."
        },
        {
            title:"CONTENT",
            desc: "Our team will teach you the art of writing audience-focused content that will help you achieve the success you truly deserve."
        },
        {
            title:"STRATEGY",
            desc: "We help creative entrepreneurs build their digital business by focusing on three key elements of a successful online platform."
        }
    ]
  return (
   <div className="build-experience">
        <div className="container">
            <h2 className="build-experience__heading">We build experience.</h2>
            <p className="build-experience__desc">A minimalist approach is the only wav to design a website</p>
            <span className="section__divider"></span>
            <div className="build-experience__cards">
                {dataCards.map((val, index)=> (<div className="build-experience__item" key={index}>
                    <h4>{val.title}</h4>
                    <p>{val.desc}</p>
                    <button type="button">Learn More</button>
                </div>))}
            </div>
        </div>
   </div>
  );
};

export default BuildExperience;
