// function Level3({ data }) {
//   return <p className="text-red-700">Received: {data}</p>;
// }
// function Level2({ data }) {
//   return <Level3 data={data} />;
// }
// function Level1({ data }) {
//   return <Level2 data={data} />;
// }

// export default function PropsDrillingScreen() {
//   return (
//     <div className="bg-red-200 p-6 rounded">
//       <h2 className="font-bold">Props Drilling</h2>
//       <Level1 data="Passed through 3 levels 😵" />
//     </div>
//   );
// }

import { useState, useEffect } from "react";

function GrandChild({ power }) {
  return (
    <div className="p-4 bg-yellow-200 rounded shadow text-center">
      ⚡ GrandChild Power: {power}
    </div>
  );
}

function Child({ power }) {
  return (
    <div className="p-4 bg-orange-300 rounded shadow my-2">
      Child
      <GrandChild power={power} />
    </div>
  );
}

function Parent({ power }) {
  return (
    <div className="p-4 bg-red-400 rounded shadow my-2">
      Parent
      <Child power={power} />
    </div>
  );
}

export default function PropsDrillingScreen() {
  const [power, setPower] = useState(0);
  const [flashing, setFlashing] = useState(false);

  const increasePower = () => {
    setFlashing(true);
    setTimeout(() => setFlashing(false), 500);
    setPower(prev => prev + 1);
  };

  return (
    <div className="bg-red-200 min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-4">🔌 Props Drilling Demo</h1>
      <button
        onClick={increasePower}
        className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 mb-4"
      >
        Increase Power 🔋
      </button>

      <div className={`w-full max-w-md ${flashing ? "wire-flash" : ""}`}>
        <Parent power={power} />
      </div>
    </div>
  );
}
