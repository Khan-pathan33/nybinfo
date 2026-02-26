// src/topics/ContextDemo.jsx
import { createContext, useContext, useState } from "react";
import TopicCard from "../components/TopicCard";

// 1️⃣ Create Context
const MessageContext = createContext();

// 2️⃣ Deeply nested component that consumes context
const Level3Child = () => {
  const message = useContext(MessageContext); // Consume context
  return <p className="text-purple-600 font-semibold">Level 3 Child: {message}</p>;
};

// Level 2
const Level2Child = () => (
  <div className="pl-4 border-l border-gray-300">
    <p className="font-medium">Level 2</p>
    <Level3Child />
  </div>
);

// Level 1
const Level1Child = () => (
  <div className="pl-4 border-l border-gray-300">
    <p className="font-medium">Level 1</p>
    <Level2Child />
  </div>
);

const ContextDemo = () => {
  const [message, setMessage] = useState("Hello from Context!");

  return (
    <TopicCard
      id="context"
      title="Context API"
      purpose="Context API allows passing data through the component tree without manually passing props at every level, solving the props drilling problem."
    >
      <div className="space-y-3">
        <p className="text-green-600 font-medium">
          Live Demo: Change the message and see it update in the deeply nested component.
        </p>

        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message"
          className="border border-gray-300 p-2 rounded w-full max-w-sm"
        />

        {/* 3️⃣ Wrap nested components in context provider */}
        <MessageContext.Provider value={message}>
          <Level1Child />
        </MessageContext.Provider>
      </div>
    </TopicCard>
  );
};

export default ContextDemo;