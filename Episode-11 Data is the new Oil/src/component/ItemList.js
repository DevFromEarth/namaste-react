import { CDN_URL } from "../utils/constant";

export default function ItemList({ items }) {
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
            <button>Add +</button>
            <img src={CDN_URL + item.card.info.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
}
