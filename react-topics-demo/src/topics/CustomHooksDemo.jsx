// src/topics/CustomHooksDemo.jsx
import { useState, useEffect } from "react";
import TopicCard from "../components/TopicCard";

// Custom hook to track window width
const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
};

const CustomHooksDemo = () => {
  const width = useWindowWidth();

  return (
    <TopicCard
      id="customHook"
      title="Custom Hooks"
      purpose="Custom hooks let you reuse stateful logic across components."
    >
      <div className="space-y-3">
        <p className="text-green-600 font-medium">Resize the window to see width change:</p>
        <p className="text-blue-600 font-semibold">Window Width: {width}px</p>
      </div>
    </TopicCard>
  );
};

export default CustomHooksDemo;