// src/components/VirtualDOMExample.jsx
import React from "react";

export default function VirtualDOMExample() {
  const [text, setText] = React.useState("");

  return (
    <div className="p-4 border rounded bg-white">
      <input
        className="border p-2 mb-2 w-full"
        placeholder="Type here"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <p className="text-gray-700">You typed: {text}</p>
    </div>
  );
}
