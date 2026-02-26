// src/topics/PureComponentDemo.jsx
import { memo, useState } from "react";
import TopicCard from "../components/TopicCard";

const Child = ({ name }) => {
  console.log("Child rendered");
  return <p className="text-purple-600">{name}</p>;
};

const MemoizedChild = memo(Child);

const PureComponentDemo = () => {
  const [count, setCount] = useState(0);

  return (
    <TopicCard
      id="pureComponent"
      title="Pure Component"
      purpose="React.memo or PureComponent prevents unnecessary re-renders if props don't change."
    >
      <div className="space-y-3">
        <MemoizedChild name="I am memoized" />
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

export default PureComponentDemo;