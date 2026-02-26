// src/topics/LazyLoadingDemo.jsx
import { Suspense, lazy, useState } from "react";
import TopicCard from "../components/TopicCard";

const LazyComponent = lazy(() => import("../components/LazyComponent")); // Create LazyComponent.jsx separately

const LazyLoadingDemo = () => {
  const [show, setShow] = useState(false);

  return (
    <TopicCard
      id="lazyLoading"
      title="Lazy Loading"
      purpose="React.lazy and Suspense allow components to load only when needed, improving performance."
    >
      <div className="space-y-3">
        <button
          onClick={() => setShow(!show)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          {show ? "Hide" : "Show"} Lazy Component
        </button>
        {show && (
          <Suspense fallback={<p>Loading...</p>}>
            <LazyComponent />
          </Suspense>
        )}
      </div>
    </TopicCard>
  );
};

export default LazyLoadingDemo;