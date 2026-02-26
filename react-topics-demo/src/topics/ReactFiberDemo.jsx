// src/topics/ReactFiberDemo.jsx
import TopicCard from "../components/TopicCard";

const ReactFiberDemo = () => {
  return (
    <TopicCard
      id="reactFiber"
      title="React Fiber"
      purpose="React Fiber is the reimplementation of React's core algorithm for incremental rendering and better performance."
    >
      <div className="space-y-3">
        <p className="text-green-600 font-medium">
          Fiber allows React to prioritize updates and pause/resume rendering.
        </p>
      </div>
    </TopicCard>
  );
};

export default ReactFiberDemo;