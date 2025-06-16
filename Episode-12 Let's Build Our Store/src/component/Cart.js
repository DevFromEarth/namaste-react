import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Card = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="Cart">
      <h1 className="">Cart</h1>
      <h2 className="ClearCart">
        <button onClick={handleClearCart}>Clear Cart</button>
      </h2>
      <div>
        {cartItems.length === 0 && <h1>Cart is empty. Add items</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Card;
