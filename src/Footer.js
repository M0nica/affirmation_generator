import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <p>
          {" "}
          Affirmation Generator by: Monica Powell <br />
          <a href="https://github.com/M0nica/affirmation_generator">
            View on GitHub
          </a>
        </p>
      </div>
    );
  }
}

export default Footer;
