// src/topics/FragmentsDemo.jsx
import TopicCard from "../components/TopicCard";

const FragmentsDemo = () => {
  return (
    <TopicCard
      id="fragments"
      title="Fragments"
      purpose="React Fragments let you group elements without adding extra DOM nodes."
    >
      <>
        <p className="text-green-600 font-medium">Live Demo: No extra wrapper div!</p>
        <>
          <p className="text-blue-600">Fragment Child 1</p>
          <p className="text-purple-600">Fragment Child 2</p>
        </>
      </>
    </TopicCard>
  );
};

export default FragmentsDemo;