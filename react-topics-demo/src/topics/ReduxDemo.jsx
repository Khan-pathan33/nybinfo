// src/topics/ReduxDemo.jsx
import { useState } from "react";
import TopicCard from "../components/TopicCard";

// Note: This is a simplified local "Redux-like" demo
// For full Redux, you'd set up store, slices, and Provider

const ReduxDemo = () => {
  const [count, setCount] = useState(0); // simulates global state
  const [step, setStep] = useState(1);

  const increment = () => setCount(count + step);
  const decrement = () => setCount(count - step);

  return (
    <TopicCard
      id="redux"
      title="Redux"
      purpose="Redux is a state management library that provides a global store to manage the app's state consistently across components."
    >
      <div className="space-y-3">
        <p className="text-green-600 font-medium">
          Live Demo: Simulate a global counter with Redux-like state.
        </p>

        <div>
          <p>
            Count: <span className="font-bold text-blue-600">{count}</span>
          </p>

          <div className="flex space-x-2 mt-2">
            <button
              onClick={increment}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Increment
            </button>
            <button
              onClick={decrement}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Decrement
            </button>
          </div>

          <div className="mt-2">
            <label className="mr-2">Step:</label>
            <input
              type="number"
              value={step}
              onChange={(e) => setStep(Number(e.target.value))}
              className="border border-gray-300 p-1 rounded w-16"
            />
          </div>
        </div>
      </div>
    </TopicCard>
  );
};

export default ReduxDemo;