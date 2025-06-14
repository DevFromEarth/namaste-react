import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useResturantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { id } = useParams();

  const [showIndex, setShowIndex] = useState(0);

  const resInfo = useResturantMenu(id);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="menu">
      <h1 className="MenuName">{name}</h1>
      <h2>
        {categories.map((value, index) => {
          return (
            <RestaurantCategory
              key={value?.card?.card.title}
              data={value.card.card}
              showItems={index === showIndex}
              index={index}
              setShowIndex={setShowIndex}
            />
          );
        })}
      </h2>
    </div>
  );
};

export default RestaurantMenu;
