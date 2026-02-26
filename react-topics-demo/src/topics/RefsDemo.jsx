// src/topics/RefsDemo.jsx
import { useRef } from "react";
import TopicCard from "../components/TopicCard";

const RefsDemo = () => {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <TopicCard
      id="refs"
      title="Refs"
      purpose="Refs allow direct access to DOM elements or React components."
    >
      <div className="space-y-3">
        <input ref={inputRef} placeholder="Click button to focus me" className="border p-2 rounded" />
        <button onClick={focusInput} className="px-4 py-2 bg-blue-500 text-white rounded">
          Focus Input
        </button>
      </div>
    </TopicCard>
  );
};

export default RefsDemo;