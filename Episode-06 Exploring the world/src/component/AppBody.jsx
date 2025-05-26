import Card from "./card.js";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";

const AppBody = () => {
  const [best, setBest] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setBest(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const filterClicked = () => {
    const filterData = data.restaurants.filter(
      (value) => value.info.avgRating > 4.5
    );
    setBest(filterData);
  };

  if (best.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="appBody">
      <div className="search">
        <button onClick={filterClicked}>Best Restaurants</button>
        <input name="myInput" /> Search
      </div>
      <div className="cards">
        {best.map((value) => (
          <Card key={value.info.id} data={value.info} />
        ))}
      </div>
    </div>
  );
};

export default AppBody;
