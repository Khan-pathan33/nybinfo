// src/topics/HooksDemo.jsx
import { useState, useEffect } from "react";
import TopicCard from "../components/TopicCard";

const HooksDemo = () => {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // useEffect demo: update clock every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup
    return () => clearInterval(interval);
  }, []);

  return (
    <TopicCard
      id="hooks"
      title="React Hooks"
      purpose="Hooks let you use state and other React features without writing class components. Common hooks: useState, useEffect, useMemo, useCallback."
    >
      <div className="space-y-3">
        <p className="text-green-600 font-medium">
          Live Demo: Update count and see a live clock using hooks.
        </p>

        {/* useState demo */}
        <div>
          <p>Counter: <span className="font-bold">{count}</span></p>
          <button
            onClick={() => setCount(count + 1)}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
          >
            Increment
          </button>
        </div>

        {/* useEffect demo */}
        <div className="mt-4">
          <p>Current Time (updates every second):</p>
          <p className="text-purple-600 font-bold">{time}</p>
        </div>
      </div>
    </TopicCard>
  );
};

export default HooksDemo;