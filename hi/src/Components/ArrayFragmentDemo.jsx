import React from "react";

export default function ArrayFragmentDemo() {
  return [
    <div key="1" className="p-4 border-2 border-blue-500 rounded-md mb-4">
      <h2 className="font-bold text-lg mb-2">Array Fragment Demo</h2>
      <p>Return multiple elements as an array with keys.</p>
    </div>,
    <div key="2" className="p-4 border-2 border-blue-500 rounded-md mb-4">
      <p>Second element in array fragment</p>
    </div>
  ];
}
