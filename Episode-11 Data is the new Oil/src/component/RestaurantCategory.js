import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, index }) => {
  const handleClick = () => {
    if (showItems) {
      setShowIndex(null);
    } else {
      setShowIndex(index);
    }
  };
  return (
    <div className="RestaurantCategory">
      <div className="CategoryHeader" onClick={handleClick}>
        <span>{data.title}</span>
        <span>⬇️</span>
      </div>
      <div className="CategoryList">
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
