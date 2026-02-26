// src/topics/EventBindingDemo.jsx
import { useState } from "react";
import TopicCard from "../components/TopicCard";

const EventBindingDemo = () => {
  const [message, setMessage] = useState("No event yet");

  const handleClick = () => setMessage("Button clicked!");
  const handleMouseOver = () => setMessage("Mouse over detected!");
  const handleMouseOut = () => setMessage("Mouse left!");

  return (
    <TopicCard
      id="eventBinding"
      title="Event Binding"
      purpose="React supports binding events like onClick, onMouseOver, onMouseOut, etc."
    >
      <div className="space-y-3">
        <p className="text-blue-600 font-semibold">{message}</p>
        <button
          onClick={handleClick}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          className="px-4 py-2 bg-purple-500 text-white rounded"
        >
          Interact with Me
        </button>
      </div>
    </TopicCard>
  );
};

export default EventBindingDemo;