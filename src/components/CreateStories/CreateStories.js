import React from "react";
import "./CreateStories.css";
import Img1 from "../../images/img1.png";
import Img2 from "../../images/img2.png";
import Img3 from "../../images/img3.png";
import Img4 from "../../images/img4.png";

import ImageWithText from "../ImageWithText/ImageWithText";

const CreateStories = () => {
  const imagesList = [
    {
      title: "OVER COMING CREATIVE BLOCK",
      date: "Brain Gardner. May 1, 2017",
      image: Img1
    },
    {
      title: "OVER COMING CREATIVE BLOCK",
      date: "Brain Gardner. May 1, 2017",
      image: Img2
    },
    {
      title: "OVER COMING CREATIVE BLOCK",
      date: "Brain Gardner. May 1, 2017",
      image: Img3
    },
    {
      title: "OVER COMING CREATIVE BLOCK",
      date: "Brain Gardner. May 1, 2017",
      image: Img4
    }
  ]
  return (
    <div className="create-stories">
      <div className="container">
        <h1 className="create-stories__header">We create stories.</h1>
        <p className="create-stories__desc">A killer narrative will turn your readers into raving fans</p>
        <span className="section__divider"></span>
        <div className="create-stories__images">
          {imagesList.map((val, ind) => (<ImageWithText data={val} key={ind}/>))}
        </div>
      </div>
    </div>
  );
};


export default CreateStories;
