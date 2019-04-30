import React from "react";

function Jumbo(props) {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Clicky Game!</h1>
        <p>Click on an image to earn points, but don't click on any more than once!</p>
        <p>Score = {props.score}</p>
        <p>Top Score = {props.topScore}</p>
      </div>
    </div>
  );
}

export default Jumbo;
