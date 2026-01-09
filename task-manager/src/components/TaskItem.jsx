// export default function TaskItem({ task, toggleTask, deleteTask }) {
//   return (
//     <li className="flex justify-between items-center p-2 mb-2 rounded border hover:bg-gray-100 dark:hover:bg-gray-800 transition">
//       <span
//         onClick={() => toggleTask(task.id)}
//         className={`cursor-pointer ${task.done ? "line-through text-gray-400" : "text-gray-800 dark:text-white"}`}
//       >
//         {task.text}
//       </span>
//       <button onClick={() => deleteTask(task.id)} className="px-2 py-1 rounded bg-red-500 text-white hover:bg-red-600">
//         Delete
//       </button>
//     </li>
//   );
// }

import { useDispatch } from "react-redux";
import { increment, decrement } from "../store";

export default function TaskItem({ task, toggleTask, deleteTask }) {
  const dispatch = useDispatch();

  const handleToggle = () => {
    toggleTask(task.id);
    task.done ? dispatch(decrement()) : dispatch(increment());
  };

  return (
    <li className="flex justify-between items-center bg-white text-black p-3 rounded">
      <span
        onClick={handleToggle}
        className={`cursor-pointer ${task.done ? "line-through text-gray-500" : ""}`}
      >
        {task.text}
      </span>
      <button
        onClick={() => deleteTask(task.id)}
        className="bg-red-500 text-white px-2 py-1 rounded"
      >
        ✕
      </button>
    </li>
  );
}
