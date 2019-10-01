import React from "react";
import ReactDOM from "react-dom";
import AffirmationComponent from "./AffirmationComponent";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AffirmationComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
