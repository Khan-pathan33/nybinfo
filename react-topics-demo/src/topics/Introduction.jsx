// src/topics/Introduction.jsx
import TopicCard from "../components/TopicCard";
import { useState } from "react";

const Introduction = () => {
  // Example live demo: simple dynamic greeting
  const [name, setName] = useState("React Learner");

  return (
    <TopicCard
      id="intro"
      title="Introduction to React"
      purpose="React is a JavaScript library for building fast, interactive user interfaces. It uses components, Virtual DOM, and declarative UI to make development efficient and modular."
    >
      <div className="space-y-3">
        <p className="text-green-600 font-medium">
          Live Demo: Type your name and see it displayed below.
        </p>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="border border-gray-300 p-2 rounded w-full max-w-sm"
        />

        <h3 className="text-lg mt-2">
          Hello, <span className="font-bold text-blue-600">{name}</span>! 👋
        </h3>
      </div>
    </TopicCard>
  );
};

export default Introduction;