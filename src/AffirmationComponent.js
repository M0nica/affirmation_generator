import React from "react";

import TweetButton from "./TweetComponent";

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
        <div className="Navigation">
          <button onClick={this.handleClick}>Next Affirmation</button>
          <TweetButton affirmation={affirmation.affirmation} author={affirmation.author} />
        </div>
        <br />
        <p>Want to add a new affirmation?</p>
        <button style="color: black !important;"><a href="https://github.com/M0nica/affirmation_generator">Contribute</a></button>
      </div>
    );
  }
}

export default AffirmationComponent;
