// src/topics/VirtualDOMDemo.jsx
import { useState } from "react";
import TopicCard from "../components/TopicCard";

const VirtualDOMDemo = () => {
  const [items, setItems] = useState(["Apple", "Banana"]);

  return (
    <TopicCard
      id="virtualDOM"
      title="Virtual DOM"
      purpose="React updates only the changed parts of the UI efficiently using the Virtual DOM."
    >
      <div className="space-y-3">
        <p className="text-green-600 font-medium">
          Click button to add items. Only necessary parts are re-rendered.
        </p>
        <button
          onClick={() => setItems([...items, "Orange"])}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add Orange
        </button>
        <ul className="list-disc pl-5">
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </TopicCard>
  );
};

export default VirtualDOMDemo;