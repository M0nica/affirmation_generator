import React from "react";
import "./App.css";

import Affirmation from "./AffirmationComponent";
import Header from "./Header";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Affirmation />
          <Footer />
      </div>
    );
  }
}

export default App;
