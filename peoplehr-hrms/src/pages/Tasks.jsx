import TaskItem from "../components/TaskItem";

const Tasks = () => {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Tasks</h1>

      <div className="bg-white p-6 rounded shadow space-y-3">
        <TaskItem title="Approve Leave Request" status="Pending" />
        <TaskItem title="Upload Policy Document" status="Done" />
        <TaskItem title="Review Attendance" status="Pending" />
      </div>
    </div>
  );
};

export default Tasks;
