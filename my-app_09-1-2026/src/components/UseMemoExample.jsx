// src/components/UseMemoExample.jsx
import React, { useMemo, useState } from "react";

export default function UseMemoExample() {
  const [num, setNum] = useState(0);

  const square = useMemo(() => {
    console.log("Calculating square...");
    return num * num;
  }, [num]);

  return (
    <div className="p-4 border rounded space-y-2">
      <input
        type="number"
        className="border p-2 w-full"
        value={num}
        onChange={e => setNum(+e.target.value)}
      />
      <p>Square: {square}</p>
    </div>
  );
}
