// src/topics/PortalsDemo.jsx
import { useState } from "react";
import { createPortal } from "react-dom";
import TopicCard from "../components/TopicCard";

const PortalContent = () => <div className="p-4 bg-yellow-200 border rounded">I am rendered in a portal!</div>;

const PortalsDemo = () => {
  const [show, setShow] = useState(false);

  return (
    <TopicCard
      id="portal"
      title="Portals"
      purpose="Portals allow rendering children into a DOM node outside the parent hierarchy."
    >
      <div className="space-y-3">
        <button onClick={() => setShow(!show)} className="px-4 py-2 bg-purple-500 text-white rounded">
          Toggle Portal
        </button>
        {show && createPortal(<PortalContent />, document.body)}
      </div>
    </TopicCard>
  );
};

export default PortalsDemo;