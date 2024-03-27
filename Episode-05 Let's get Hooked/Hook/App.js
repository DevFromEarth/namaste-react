import React from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./src/component/Header";
import AppBody from "./src/component/AppBody";

console.log("outside App");
const App = () => {
  console.log("inside App");
  return (
  <div className="applayout">
    <Header />
    <AppBody />
  </div>
)};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
