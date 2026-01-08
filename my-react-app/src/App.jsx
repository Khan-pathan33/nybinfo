import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskInput() {
  const { addTask } = useContext(TaskContext);
  const [taskText, setTaskText] = useState(""); // Two-way data binding

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return;
    addTask(taskText);
    setTaskText(""); // clear input
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)} // Data binding
        placeholder="Add a new task"
        className="flex-grow border rounded px-3 py-2"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add
      </button>
    </form>
  );
}

