// import TaskItem from "./TaskItem";

// export default function TaskList({ tasks, toggleTask, deleteTask }) {
//   return (
//     <ul>
//       {tasks.map(task => (
//         <TaskItem key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} />
//       ))}
//     </ul>
//   );
// }
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <ul className="mt-3 space-y-2">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}
