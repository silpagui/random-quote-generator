import React from "react";
import "./RandomButton.styles.css";

import ArrowCircleSrc from "../../assets/arrow-circle.svg";

export function RandomButton({ onClick }) {
  return (
    <button className="random-button" onClick={onClick}>
      random
      <img src={ArrowCircleSrc} alt="random" width="30" height="30" />
    </button>
  );
}
