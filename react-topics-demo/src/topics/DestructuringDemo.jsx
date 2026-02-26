// src/topics/DestructuringDemo.jsx
import TopicCard from "../components/TopicCard";

const DestructuringDemo = () => {
  const user = { name: "Alice", age: 25, city: "Paris" };
  const { name, age, city } = user; // Object destructuring

  const numbers = [10, 20, 30];
  const [first, second] = numbers; // Array destructuring

  return (
    <TopicCard
      id="destructuring"
      title="Destructuring"
      purpose="Destructuring allows extracting values from objects or arrays in React."
    >
      <div className="space-y-3">
        <p>User Info: {name}, {age} years old, lives in {city}</p>
        <p>Numbers: First={first}, Second={second}</p>
      </div>
    </TopicCard>
  );
};

export default DestructuringDemo;