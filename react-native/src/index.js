import React from "react";
import ReactDOM from "react-dom";

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
