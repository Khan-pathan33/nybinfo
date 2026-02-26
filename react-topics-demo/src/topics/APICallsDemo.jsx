// src/topics/APICallsDemo.jsx
import { useState, useEffect } from "react";
import TopicCard from "../components/TopicCard";

const APICallsDemo = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <TopicCard
      id="api"
      title="API Calls (HTTP Requests)"
      purpose="Fetch data from APIs using fetch or axios and render in React components."
    >
      <div className="space-y-3">
        {loading ? (
          <p className="text-red-500 font-semibold">Loading...</p>
        ) : (
          <ul className="list-disc pl-5">
            {data.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        )}
      </div>
    </TopicCard>
  );
};

export default APICallsDemo;