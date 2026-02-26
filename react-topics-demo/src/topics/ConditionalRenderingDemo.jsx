// src/topics/ConditionalRenderingDemo.jsx
import { useState } from "react";
import TopicCard from "../components/TopicCard";

const ConditionalDemo = () => {
  const [showMessage, setShowMessage] = useState(true);

  return (
    <TopicCard
      id="conditional"
      title="Conditional Rendering"
      purpose="Render different UI elements based on state or props."
    >
      <div className="space-y-3">
        <button
          onClick={() => setShowMessage(!showMessage)}
          className="px-4 py-2 bg-purple-500 text-white rounded"
        >
          Toggle Message
        </button>

        {showMessage ? (
          <p className="text-blue-600 font-semibold">Hello! I am visible.</p>
        ) : (
          <p className="text-red-600 font-semibold">Now you can't see me.</p>
        )}
      </div>
    </TopicCard>
  );
};

export default ConditionalDemo;