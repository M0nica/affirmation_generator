import React from "react";
import lady_on_phone from "./lady_on_phone.svg";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Affirmation Generator</h1>
        <img src={lady_on_phone} className="App-logo" alt="logo" />
      </header>
    );
  }
}

export default Header;
