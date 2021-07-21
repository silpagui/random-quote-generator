import React, { useEffect, useState } from "react";
import "./App.styles.css";

import { RandomButton } from "../RandomButton/RandomButton.component.js";
import { Author } from "../Author/Author.component.js";
import { Quote } from "../Quote/Quote.component.js";

const randomQuote = "https://quote-garden.herokuapp.com/api/v3/quotes/random";
export function App() {
  const [quote, setQuote] = useState({});
  const [listQuotes, setLisQuotes] = useState([]);

  function handleNewQuote() {
    fetch(randomQuote)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setQuote(data.data[0]);
        setLisQuotes([]);
      });
  }

  useEffect(() => {
    handleNewQuote();
  }, [setQuote, setLisQuotes]);

  const genreList = `https://quote-garden.herokuapp.com/api/v3/quotes?author=${quote.quoteAuthor}&page=1&limit=3&genre=${quote.quoteGenre}`;

  const handleGenre = () => {
    fetch(genreList)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLisQuotes(data.data);
      });
  };

  const filteredQuotes = listQuotes.filter((quoteItem) => {
    return quoteItem._id !== quote._id;
  });

  const parsedQuotes =
    filteredQuotes.length === 3 ? filteredQuotes.slice(0, 2) : filteredQuotes;

  const hasMoreQuote = listQuotes.length > 0;

  return (
    <div className="main-wrapper">
      <RandomButton
        onClick={() => {
          handleNewQuote();
        }}
      />
      <div className="quotes-wrapper">
        {hasMoreQuote && <h1 className="author-title">{quote.quoteAuthor}</h1>}
        <Quote quoteText={quote.quoteText} />
        {parsedQuotes.map((quoteItem) => {
          return <Quote key={quoteItem._id} quoteText={quoteItem.quoteText} />;
        })}
        {!hasMoreQuote && (
          <Author
            quoteAuthor={quote.quoteAuthor}
            quoteGenre={quote.quoteGenre}
            onClick={() => {
              handleGenre();
            }}
          />
        )}
      </div>
      <p className="copy">
        created by <a href="index.html">username</a> - devChallenges.io
      </p>
    </div>
  );
}
