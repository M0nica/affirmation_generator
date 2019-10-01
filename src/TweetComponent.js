// Twitter Dev Reference: https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/overview

import React, { Component } from "react";

import twitter from "./twitter.svg";

class TweetComponent extends Component {

  tweetableUrl() {
    const tweetableUrl = "https://twitter.com/intent/tweet?url=https://www.affirmations.madewithtech.com/&text=" + this.tweetableText();
    return tweetableUrl;
  }

  tweetableText() {
    const tweetableText = encodeURIComponent('"' + this.props.affirmation + '" - ' + this.props.author) + '%0A' + encodeURIComponent("Check out the Affirmation Generator:");
    return tweetableText;
  }

  onClickToTweet(url) {
    window.open(
      url,
      "twitterwindow", 
      "height=450, width=550, toolbar=0, location=0, menubar=0, directories=0,scrollbars=0, rel=noopener"
    );
  }

  render() {
    return (
      <button onClick={() => this.onClickToTweet(this.tweetableUrl())}>
        <img src={twitter} className="twitter-logo" alt="Twitter logo" />
      </button>
    );
  }
}

export default TweetComponent;
