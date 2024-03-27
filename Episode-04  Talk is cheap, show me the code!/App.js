import React from "react";
import ReactDOM from "react-dom/client";
import data from "./data.js";

const Header = () => (
  <div className="header">
    <div className="logo">
      <img src="https://www.creativefabrica.com/wp-content/uploads/2020/02/12/Food-Logo-Graphics-1-99-580x386.jpg" />
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
);

const AppBody = () => (
  <div className="appBody">
    <div className="search">
      <input name="myInput" /> Search
    </div>
    <div className="cards">
      {data.restaurants.map(value => (
        <Card key={value.info.id} data={value.info} />
      ))}
    </div>
  </div>
);

const Card = ({data}) => (
  <div className="card">
    <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${data.cloudinaryImageId}`} />
    <div className="cardDetails">
      <div className="cardName">{data.name}</div>
      <div className="cuisine">{data.cuisines.slice(0, 2).join(", ")}</div>
      <div className="otherDetails">
        <div className="rating">{data.avgRating}</div>
        <div className="price">₹400</div>
      </div>
    </div>
  </div>
);

const AppLayout = () => (
  <div className="applayout">
    <Header />
    <AppBody />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
