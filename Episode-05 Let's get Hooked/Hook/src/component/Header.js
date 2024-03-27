import {LOGO_URL} from "../utils/constant"

console.log("outside Header");
export const Header = () => {
  console.log("inside Header");
  return (
  <div className="header">
    <div className="logo">
      <img src={LOGO_URL} />
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
      </ul>
    </div>
  </div>
)};