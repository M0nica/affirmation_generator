import React from "react";

import "./App.css";

import affirmations from "./affirmations";

export function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export function getAffirmation(index) {
  return {
    author: affirmations[index].author,
    affirmation: affirmations[index].affirmation
  };
}

export function generateAffirmation() {
  const index = getRandomInt(affirmations.length);
  const affirmation = getAffirmation(index);

  return affirmation;
}

class AffirmationComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      affirmation: generateAffirmation()
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({ affirmation: generateAffirmation() });
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
        <br>
        <p>Want to add a new affirmation?</p>
        <button><a href="https://github.com/M0nica/affirmation_generator" style="color: black; text-decoration: none;">Contribute</a></button>
      </div>
    );
  }
}

export default AffirmationComponent;
