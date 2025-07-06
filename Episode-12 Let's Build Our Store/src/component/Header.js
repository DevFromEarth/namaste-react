import { LOGO_URL } from "../utils/constant";
import { useContext, useState } from "react";
import { Link } from "react-router";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {
  let [btnName, setBtnname] = useState("Login");

  const { loggedInUser } = useContext(UserContext);

  // Subscribing to the store using a Selector
  // Below code should avoid it. Not optimised
  // const temp = useSelector((store) => store);
  // Below code is currect use of store
  // const cartItems1 = temp.cart.items;
  const cartItems = useSelector((store) => store.cart.items);
  console.log("In Header : ", cartItems);

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
            <Link to="cart">Cart -{cartItems.length} items</Link>
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
