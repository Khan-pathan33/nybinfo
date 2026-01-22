import React from "react";

export default function FragmentDemo() {
  return (
    <>
      <div className="p-4 border-2 border-green-500 rounded-md mb-4">
        <h2 className="font-bold text-lg mb-2">&lt;&gt; Fragment Demo</h2>
        <p>Using empty tags `<>...</>` avoids extra DOM elements.</p>
      </div>
      <div className="p-4 border-2 border-green-500 rounded-md mb-4">
        <p>Second child inside the same fragment</p>
      </div>
    </>
  );
}
