import { CDN_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Card = ({ data }) => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="card">
      <img src={CDN_URL + `${data.cloudinaryImageId}`} />
      <div className="cardDetails">
        <div className="cardName">{data.name}</div>
        <div className="cuisine">{data.cuisines.slice(0, 2).join(", ")}</div>
        <div className="otherDetails">
          <div className="rating">{data.avgRating}</div>
          <div className="price">₹400</div>
        </div>
      </div>
      <div>UserName : {loggedInUser}</div>
    </div>
  );
};

export const withOffer = (Card) => {
  return (props) => {
    return (
      <div>
        <label>Offered</label>
        <Card {...props} />
      </div>
    );
  };
};

export default Card;
