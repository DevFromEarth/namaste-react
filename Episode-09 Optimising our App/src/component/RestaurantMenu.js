import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useResturantMenu from "../../../Episode-09 Optimising our App/src/utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { id } = useParams();

  const resInfo = useResturantMenu(id);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>
        {cuisines} :{costForTwoMessage}{" "}
      </h2>
    </div>
  );
};

export default RestaurantMenu;
