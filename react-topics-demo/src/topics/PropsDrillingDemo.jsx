// src/topics/PropsDrillingDemo.jsx
import TopicCard from "../components/TopicCard";

// Deeply nested components
const ChildLevel3 = ({ message }) => {
  return <p className="text-purple-600 font-semibold">Level 3 Child: {message}</p>;
};

const ChildLevel2 = ({ message }) => {
  return (
    <div className="pl-4 border-l border-gray-300">
      <p className="font-medium">Level 2 passing message down</p>
      <ChildLevel3 message={message} />
    </div>
  );
};

const ChildLevel1 = ({ message }) => {
  return (
    <div className="pl-4 border-l border-gray-300">
      <p className="font-medium">Level 1 passing message down</p>
      <ChildLevel2 message={message} />
    </div>
  );
};

const PropsDrillingDemo = () => {
  return (
    <TopicCard
      id="propsDrilling"
      title="Props Drilling"
      purpose="Props drilling occurs when you pass props through many levels of nested components to reach the component that needs it."
    >
      <div className="space-y-3">
        <p className="text-green-600 font-medium">
          Live Demo: Observe how a message is passed through multiple levels.
        </p>

        {/* Parent component */}
        <ChildLevel1 message="Hello from Parent!" />

        <p className="mt-2 text-gray-500 text-sm">
          ⚡ Notice: The message has to travel through each intermediate component (Level 1 → Level 2 → Level 3).
        </p>
      </div>
    </TopicCard>
  );
};

export default PropsDrillingDemo;