import FoodCard from "../components/FoodCard";
import { foodItems } from "../data/foodData";

const Home = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      {foodItems.map((food) => (
        <FoodCard key={food.id} food={food} />
      ))}
    </div>
  );
};

export default Home;
