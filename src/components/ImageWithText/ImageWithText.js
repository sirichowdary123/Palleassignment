import React from "react";
import "./ImageWithText.css";

const ImageWithText = (props) => {
    const {data} = props;
  return (
    <div className="image-with-text">
        <img src={data.image} alt={data.title}/>
        <h5>{data.title}</h5>
        <div>{data.date}</div>
    </div>
  );
};


export default ImageWithText;
