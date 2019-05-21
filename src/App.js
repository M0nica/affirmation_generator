import React from "react";
import "./App.css";

import Affirmation from "./Affirmation";
import Header from "./Header";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <Affirmation />
          <Footer />
        </header>
      </div>
    );
  }
}

export default App;
