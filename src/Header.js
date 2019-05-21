import React from "react";
import lady_on_phone from "./lady_on_phone.svg";
import "./App.css";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <h1>Affirmation Generator</h1>
        <img src={lady_on_phone} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default Header;
