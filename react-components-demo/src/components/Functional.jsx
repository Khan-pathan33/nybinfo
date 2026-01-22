import { useState } from "react";

function Functional() {
  const [online, setOnline] = useState(false);

  return (
    <div style={boxStyleGreen}>
      <h2>Functional Component</h2>
      <p>Status: {online ? "🟢 Online" : "🔴 Offline"}</p>
      <button onClick={() => setOnline(!online)}>
        Toggle Status
      </button>
    </div>
  );
}

const boxStyleGreen = {
  border: "2px solid #22c55e",
  padding: "20px",
  borderRadius: "10px",
  width: "250px"
};

export default Functional;
