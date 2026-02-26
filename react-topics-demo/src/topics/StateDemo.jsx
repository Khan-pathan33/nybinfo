// src/topics/StateDemo.jsx
import { useState } from "react";
import TopicCard from "../components/TopicCard";

const StateDemo = () => {
  const [count, setCount] = useState(0);

  return (
    <TopicCard
      id="state"
      title="State"
      purpose="State allows components to hold and update data dynamically."
    >
      <div className="space-y-3">
        <p className="text-green-600 font-medium">
          Live Demo: Click buttons to increment or decrement the counter.
        </p>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setCount(count - 1)}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            -
          </button>
          <span className="font-bold text-xl">{count}</span>
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            +
          </button>
        </div>
      </div>
    </TopicCard>
  );
};

export default StateDemo;