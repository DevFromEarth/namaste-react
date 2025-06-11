const Card = ({ data }) => {
  return (
    <div className="card">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${data.cloudinaryImageId}`}
      />
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
};

export default Card;
