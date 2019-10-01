import React from "react";

import { getRandomQuote } from "./utils/QuoteService";

import "./App.css";

class AffirmationComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      affirmation: getRandomQuote()
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({ affirmation: getRandomQuote() });
  }

  render() {
    const affirmation = this.state.affirmation;
    return (
      <div className="Affirmation">
        <blockquote className="affirmation">
          {affirmation.affirmation}
        </blockquote>
        <p className="author-citation">{affirmation.author}</p>
        <button onClick={this.handleClick}>Next Affirmation</button>
      </div>
    );
  }
}

export default AffirmationComponent;
