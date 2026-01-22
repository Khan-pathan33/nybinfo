import React from "react";

export default function StrictModeDemo() {
  return (
    <div className="p-4 border-2 border-red-500 rounded-md mb-4">
      <h2 className="font-bold text-lg mb-2">StrictMode Demo</h2>
      <p>StrictMode does NOT render extra DOM, only helps detect issues in dev mode.</p>
      <ul className="list-disc list-inside">
        <li>Double invocation in dev for lifecycle checks</li>
        <li>No extra wrapper element in DOM</li>
      </ul>
    </div>
  );
}
