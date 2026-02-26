// src/topics/ComponentsDemo.jsx
import TopicCard from "../components/TopicCard";

// Child component example
const Child = ({ name }) => {
  return <p className="text-purple-600">I am a child component. Hello, {name}!</p>;
};

const ComponentsDemo = () => {
  return (
    <TopicCard
      id="components"
      title="Components"
      purpose="Components let you split UI into reusable and independent pieces. They can accept props and maintain their own state."
    >
      <div className="space-y-3">
        <p className="text-green-600 font-medium">
          Live Demo: This demonstrates a parent component rendering a child component.
        </p>

        <Child name="React Learner" />

        <p className="mt-2">
          You can reuse <span className="font-bold">Child</span> multiple times:
        </p>

        <Child name="Student 1" />
        <Child name="Student 2" />
        <Child name="Student 3" />
      </div>
    </TopicCard>
  );
};

export default ComponentsDemo;