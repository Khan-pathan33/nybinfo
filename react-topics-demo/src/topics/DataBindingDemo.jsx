// src/topics/DataBindingDemo.jsx
import { useState } from "react";
import TopicCard from "../components/TopicCard";

const DataBindingDemo = () => {
  const [name, setName] = useState("");

  return (
    <TopicCard
      id="dataBinding"
      title="Data Binding"
      purpose="Two-way data binding in React lets UI elements and state stay in sync."
    >
      <div className="space-y-3">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full max-w-sm"
        />
        <p className="text-blue-600 font-semibold">Hello, {name || "stranger"}!</p>
      </div>
    </TopicCard>
  );
};

export default DataBindingDemo;