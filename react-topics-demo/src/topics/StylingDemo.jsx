// src/topics/StylingDemo.jsx
import { useState } from "react";
import TopicCard from "../components/TopicCard";

const StylingDemo = () => {
  const [color, setColor] = useState("blue");

  return (
    <TopicCard
      id="styling"
      title="Styling in React"
      purpose="React supports inline styles, CSS classes, CSS modules, styled-components, and Tailwind."
    >
      <div className="space-y-3">
        <select value={color} onChange={(e) => setColor(e.target.value)} className="border p-2 rounded">
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
        </select>
        <p className={`text-${color}-600 font-bold`}>This text changes color!</p>
      </div>
    </TopicCard>
  );
};

export default StylingDemo;