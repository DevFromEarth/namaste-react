import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import Example from "./Example";
export const Header = () => {
  let [btnName, setBtnname] = useState("Login");
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} />
        <Example />
      </div>
      <div className="navbar">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <button
              className="login"
              onClick={() => {
                setBtnname((pre) => (pre === "Login" ? "Logout" : "Login"));
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
