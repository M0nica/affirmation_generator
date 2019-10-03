import React from "react";
import "./Footer.css";
import quoteList from "./affirmations";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <p>Currently there are {quoteList.length - 1} affirmations ✨</p>
        <p>
          {" "}
          Affirmation Generator maintained by:{" "}
          <a href="https://github.com/M0nica/affirmation_generator">m0nica</a>
          <br />
          <a href="https://github.com/M0nica/affirmation_generator">
            View on GitHub
          </a>
        </p>
      </div>
    );
  }
}

export default Footer;
