import React from "react";
import ReactDOM from "react-dom";
// we import app.js in second step :
import AppComponent from "./app";

import "./index.css";
// ------------------------------------------------------------------
// fisrt code ...
// it's pattern :
// const element = React.createElement("element name",{element attributes},"element content");

const element = React.createElement(
  "div",
  { id: "title", className: "app-title" },
  "this is box for title"
);

// attaching element object to the div with root id in public/index.html

ReactDOM.render(element, document.getElementById("root"));

// ------------------------------------------------------------------

// now we want to use js and react base by component ...
// we create an component with any name for ex : app.js -> go to line 3

ReactDOM.render(<AppComponent />, document.getElementById("root"));
