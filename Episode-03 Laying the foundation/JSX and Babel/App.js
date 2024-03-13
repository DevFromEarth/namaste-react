import React from "react";
import ReactDOM from "react-dom/client";

// React.createE1ement => ReactE1ement/JS Object => HTMLE1ement(render)
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "hello world from 1react"
);
console.log("heading => ", heading);

// JSX => Babel Transpiles it to React.createEtement => ReactE1ementl/JS Object => HTMLEtement(render)
const jsxHeading = <h1 className="xyz">Hello from JSX</h1>;
console.log("jsxHeading =>", jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
