import StatCard from "../components/StatCard";

const Dashboard = () => {
  return (
    <div className="flex gap-4 flex-wrap">
      <StatCard title="Total Employees" value="120" />
      <StatCard title="Pending Tasks" value="6" />
      <StatCard title="Documents" value="18" />
      <StatCard title="Upcoming Events" value="4" />
    </div>
  );
};

export default Dashboard;
