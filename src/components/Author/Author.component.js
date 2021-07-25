import React from "react";
import "./Author.styles.css";

export function Author({ quoteAuthor, quoteGenre, onClick }) {
  return (
    <button
      className="author"
      onClick={onClick}
      aria-label={`Author: ${quoteAuthor}. Genre: ${quoteGenre}`}
    >
      <span aria-hidden="true" className="author-name">
        {quoteAuthor}
      </span>
      <span aria-hidden="true" className="genres">
        {quoteGenre}
      </span>
    </button>
  );
}
