import { useState, useEffect } from "react";

export default function LifecycleScreen() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-yellow-200 min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">⏱ Lifecycle Demo</h1>
      <div className="p-6 bg-white rounded shadow text-2xl">
        Current Time: {time}
      </div>
    </div>
  );
}
