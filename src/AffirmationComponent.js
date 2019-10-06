import React from "react";

import TweetButton from "./TweetComponent";
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
      <main className="Affirmation">
        <div className="quote">
          <blockquote>{affirmation.affirmation}</blockquote>
          <p className="author-citation">{affirmation.author}</p>
        </div>

        <div className="Navigation">
          <button onClick={this.handleClick}>Next Affirmation</button>
          <TweetButton
            affirmation={affirmation.affirmation}
            author={affirmation.author}
          />
        </div>
        <br />
        <p>Want to add a new affirmation?</p>
        <a
          href="https://github.com/M0nica/affirmation_generator"
          className="contribute-button"
        >
          <button>Contribute</button>
        </a>
      </main>
    );
  }
}

export default AffirmationComponent;
