// src/topics/HOCDemo.jsx
import TopicCard from "../components/TopicCard";

// Higher Order Component
const withBorder = (WrappedComponent) => {
  return (props) => (
    <div className="border border-gray-400 p-2 rounded">
      <WrappedComponent {...props} />
    </div>
  );
};

const SimpleComponent = ({ text }) => <p>{text}</p>;
const EnhancedComponent = withBorder(SimpleComponent);

const HOCDemo = () => {
  return (
    <TopicCard
      id="hoc"
      title="Higher-Order Components (HOC)"
      purpose="HOCs are functions that take a component and return a new enhanced component."
    >
      <div className="space-y-3">
        <EnhancedComponent text="I am wrapped with a border HOC!" />
      </div>
    </TopicCard>
  );
};

export default HOCDemo;