import React from "react";

import "./App.css";

import quotes from "./quotes";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function generateQuote() {
  const quoteIndex = getRandomInt(quotes.length);
  const quote = {
    author: quotes[quoteIndex].author,
    quote: quotes[quoteIndex].quote
  };
  return quote;
}

class Affirmation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: generateQuote()
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({ quote: generateQuote() });
  }

  render() {
    const quote = this.state.quote;
    return (
      <div className="Affirmation">
        <blockquote className="quote">{quote.quote}</blockquote>
        <p className="author-citation">{quote.author}</p>
        <button onClick={this.handleClick}>Next Affirmation</button>
      </div>
    );
  }
}

export default Affirmation;
