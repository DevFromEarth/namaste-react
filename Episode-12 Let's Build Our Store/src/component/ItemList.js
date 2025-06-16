import { CDN_URL } from "../utils/constant";

import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

export default function ItemList({ items }) {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    console.log("In ItemList: ", dispatch);
    console.log(addItem);
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="ItemList">
          <div className="ItemListLeft">
            <span>{item.card.info.name}</span>
            <span>
              - ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}
            </span>
            <p>{item.card.info.description}</p>
          </div>
          <div className="ItemListRight">
            <button onClick={() => handleAddItem(item)}>Add +</button>
            <img src={CDN_URL + item.card.info.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
}
