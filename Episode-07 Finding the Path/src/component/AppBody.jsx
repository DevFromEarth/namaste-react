import Card from "./Card.js";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";

const AppBody = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestraunt(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const filterClicked = () => {
    const filterData = listOfRestaurants.filter(
      (value) => value.info.avgRating > 4.5
    );
    setListOfRestraunt(filterData);
  };

  //Conditional rendering
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="appBody">
      <div className="search">
        <button onClick={filterClicked}>Best Restaurants</button>
        <input
          name="myInput"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={() => {
            const filteredRes = listOfRestaurants.filter((restaurant) => {
              return restaurant.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            setFilteredRestaurants(filteredRes);
          }}
        >
          Search
        </button>
      </div>
      <div className="cards">
        {filteredRestaurants.map((value) => (
          <Card key={value.info.id} data={value.info} />
        ))}
      </div>
    </div>
  );
};

export default AppBody;
