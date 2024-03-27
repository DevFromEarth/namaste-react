import data from "../utils/data";
import Card from "./card.js";
import { useState } from "react";

console.log("Outside AppBody");
const AppBody = () => {
  console.log("inside AppBody");
  const [best, setBest] = useState(data.restaurants);
  
  const filterClicked = () => {
    const filterData = data.restaurants.filter(value => value.info.avgRating > 4.5);
    setBest(filterData);
  }
  return (<div className="appBody">
    <div className="search">
      <button onClick={filterClicked}>Best Restaurants</button>
      <input name="myInput" /> Search
    </div>
    <div className="cards">
      {best.map(value => <Card key={value.info.id} data={value.info} />)}
    </div>
  </div>);
};

export default AppBody;