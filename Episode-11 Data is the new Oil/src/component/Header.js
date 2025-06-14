import { LOGO_URL } from "../utils/constant";
import { useContext, useState } from "react";
import { Link } from "react-router";
import UserContext from "../utils/UserContext";

export const Header = () => {
  let [btnName, setBtnname] = useState("Login");

  const { loggedInUser } = useContext(UserContext);
  console.log("inside Header: ", loggedInUser);
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} />
      </div>
      <div className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="news">News</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="about">About</Link>
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
            <span>{loggedInUser}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
