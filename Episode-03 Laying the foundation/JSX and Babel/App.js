import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement/JS Object => HTMLElement(render)
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "hello world from 1react"
);
console.log("heading => ", heading);

// JSX => Babel Transpiles it to React.createElement => ReactElement/JS Object => HTMLElement(render)
const jsxHeading = <h1 className="xyz">Hello from JSX</h1>;
console.log("jsxHeading =>", jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
