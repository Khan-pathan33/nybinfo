// src/topics/JSXDemo.jsx
import TopicCard from "../components/TopicCard";
import { useState } from "react";

const JSXDemo = () => {
  const [name, setName] = useState("React Learner");
  const [color, setColor] = useState("blue");

  return (
    <TopicCard
      id="jsx"
      title="JSX"
      purpose="JSX allows you to write HTML-like syntax directly inside JavaScript. React compiles it to efficient JavaScript code that renders elements on the page."
    >
      <div className="space-y-3">
        <p className="text-green-600 font-medium">
          Live Demo: Change your name and color dynamically!
        </p>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="border border-gray-300 p-2 rounded w-full max-w-sm"
        />

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

        <h3 className={`text-lg mt-2 text-${color}-600`}>
          Hello, <span className="font-bold">{name}</span>! 👋
        </h3>
      </div>
    </TopicCard>
  );
};

export default JSXDemo;