// src/topics/ReactMemoDemo.jsx
import { memo, useState } from "react";
import TopicCard from "../components/TopicCard";

const Child = ({ value }) => {
  console.log("Child rendered");
  return <p className="text-purple-600">Child value: {value}</p>;
};

const MemoizedChild = memo(Child);

const ReactMemoDemo = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <TopicCard
      id="reactMemo"
      title="React.memo"
      purpose="React.memo prevents re-rendering of functional components when props haven't changed."
    >
      <div className="space-y-3">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something"
          className="border border-gray-300 p-2 rounded w-full max-w-sm"
        />
        <MemoizedChild value={text} />
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Increment Count ({count})
        </button>
      </div>
    </TopicCard>
  );
};

export default ReactMemoDemo;