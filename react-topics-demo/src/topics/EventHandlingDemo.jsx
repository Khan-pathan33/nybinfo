// src/topics/EventHandlingDemo.jsx
import { useState } from "react";
import TopicCard from "../components/TopicCard";

const EventHandlingDemo = () => {
  const [message, setMessage] = useState("Click the button!");

  const handleClick = () => {
    setMessage("Button clicked! 🎉");
  };

  return (
    <TopicCard
      id="eventHandling"
      title="Event Handling"
      purpose="React allows you to handle events like onClick, onChange, etc., in JSX."
    >
      <div className="space-y-3">
        <p className="text-green-600 font-medium">{message}</p>
        <button
          onClick={handleClick}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Click Me
        </button>
      </div>
    </TopicCard>
  );
};

export default EventHandlingDemo;