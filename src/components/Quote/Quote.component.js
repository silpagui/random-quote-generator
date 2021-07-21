import React from "react";
import "./Quote.styles.css";

export function Quote({ quoteText }) {
  return <p className="quote">{quoteText}</p>;
}
