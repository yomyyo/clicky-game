import React from "react";
import "./Picture.css"

//pass the image into each card so all 12 are rendered
const Picture = props => (
  <div className="card" onClick={props.imageClick}>
    <div className="img-container">
      <img className="DBZPic" alt={props.image.replace(".jpg", "")} src={require("../Images/" + props.image)} />
    </div>
  </div>
);

export default Picture;