// src/topics/RoutingDemo.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TopicCard from "../components/TopicCard";

const Home = () => <p className="text-blue-600">Home Page</p>;
const About = () => <p className="text-green-600">About Page</p>;

const RoutingDemo = () => {
  return (
    <TopicCard
      id="routing"
      title="React Routing"
      purpose="React Router allows single-page applications to navigate between different components."
    >
      <Router>
        <div className="space-x-4 mb-2">
          <Link to="/" className="text-blue-500 underline">Home</Link>
          <Link to="/about" className="text-green-500 underline">About</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </TopicCard>
  );
};

export default RoutingDemo;