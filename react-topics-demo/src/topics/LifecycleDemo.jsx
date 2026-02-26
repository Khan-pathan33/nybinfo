// src/topics/LifecycleDemo.jsx
import { useState, useEffect } from "react";
import TopicCard from "../components/TopicCard";

const LifecycleDemo = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component mounted or count updated:", count);
    return () => console.log("Cleanup before next effect or unmount");
  }, [count]);

  return (
    <TopicCard
      id="lifecycle"
      title="Lifecycle Methods"
      purpose="useEffect simulates React class lifecycle methods: mount, update, and unmount."
    >
      <div className="space-y-3">
        <p className="text-green-600 font-medium">
          Open console to see lifecycle logs.
        </p>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Increment Count
        </button>
        <p className="font-semibold">Count: {count}</p>
      </div>
    </TopicCard>
  );
};

export default LifecycleDemo;