const TaskItem = ({ title, status }) => {
  return (
    <div className="flex justify-between items-center p-3 border rounded">
      <span>{title}</span>
      <span className={`text-sm ${status === "Done" ? "text-green-600" : "text-orange-600"}`}>
        {status}
      </span>
    </div>
  );
};

export default TaskItem;
