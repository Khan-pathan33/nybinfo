import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const FoodCard = ({ food }) => {
  const dispatch = useDispatch();

  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-bold">{food.name}</h2>
      <p>₹{food.price}</p>
      <button
        onClick={() => dispatch(addToCart(food))}
        className="mt-2 bg-green-500 text-white px-4 py-1 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default FoodCard;
