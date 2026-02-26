// src/topics/PropsDemo.jsx
import { useState } from "react";
import TopicCard from "../components/TopicCard";

// Child component that receives props
const Child = ({ message, color }) => {
  return <p className={`text-${color}-600 font-semibold`}>Child says: {message}</p>;
};

const PropsDemo = () => {
  const [message, setMessage] = useState("Hello from parent!");
  const [color, setColor] = useState("blue");

  return (
    <TopicCard
      id="props"
      title="Props"
      purpose="Props (short for properties) allow passing data from a parent component to a child component."
    >
      <div className="space-y-3">
        <p className="text-green-600 font-medium">
          Live Demo: Update the message and choose color to see it passed to child component.
        </p>

        {/* Input to change message */}
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter message"
          className="border border-gray-300 p-2 rounded w-full max-w-sm"
        />

        {/* Select to change color */}
        <select
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="border border-gray-300 p-2 rounded"
        >
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="purple">Purple</option>
        </select>

        {/* Child component receives props */}
        <Child message={message} color={color} />
      </div>
    </TopicCard>
  );
};

export default PropsDemo;