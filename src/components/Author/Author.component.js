import React from "react";
import "./Author.styles.css";

export function Author({ quoteAuthor, quoteGenre, onClick }) {
  return (
    <button className="author" onClick={onClick}>
      <h2 className="author-name">{quoteAuthor}</h2>
      <p className="genres">{quoteGenre}</p>
    </button>
  );
}
