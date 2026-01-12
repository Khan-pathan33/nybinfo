import { useEffect, useState } from "react";
import StatCard from "../components/StatCard";

const Dashboard = () => {
  const [stats, setStats] = useState({
    users: 0,
    sales: 0,
    orders: 0,
    revenue: 0,
  });

  useEffect(() => {
    // Simulate API call
    setStats({
      users: 1200,
      sales: 5000,
      orders: 320,
      revenue: 10000,
    });
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-700">Dashboard</h1>
      <div className="flex flex-wrap gap-4">
        <StatCard title="Users" value={stats.users} />
        <StatCard title="Sales" value={`$${stats.sales}`} />
        <StatCard title="Orders" value={stats.orders} />
        <StatCard title="Revenue" value={`$${stats.revenue}`} />
      </div>
    </div>
  );
};

export default Dashboard;

