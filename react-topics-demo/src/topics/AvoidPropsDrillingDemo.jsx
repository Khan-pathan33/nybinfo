// src/topics/AvoidPropsDrillingDemo.jsx
import { createContext, useContext } from "react";
import TopicCard from "../components/TopicCard";

// Context creation
const MessageContext = createContext();

const Level3Child = () => {
  const message = useContext(MessageContext);
  return <p className="text-purple-600 font-semibold">Level 3 Child: {message}</p>;
};

const Level2Child = () => (
  <div className="pl-4 border-l border-gray-300">
    <p className="font-medium">Level 2</p>
    <Level3Child />
  </div>
);

const Level1Child = () => (
  <div className="pl-4 border-l border-gray-300">
    <p className="font-medium">Level 1</p>
    <Level2Child />
  </div>
);

const AvoidPropsDrillingDemo = () => {
  return (
    <TopicCard
      id="avoidPropsDrilling"
      title="Avoiding Props Drilling"
      purpose="Use Context API to avoid passing props through multiple nested components."
    >
      <div className="space-y-3">
        <MessageContext.Provider value="Hello via Context!">
          <Level1Child />
        </MessageContext.Provider>
      </div>
    </TopicCard>
  );
};

export default AvoidPropsDrillingDemo;