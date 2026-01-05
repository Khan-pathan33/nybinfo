// const card = ({title}) => {
//     return (
//         <div className="card" >
//            <h2>{title}</h2>
//         </div>
//     )
// }

// const app =() => {
//     return (
//         <>
//         <h2>Fuction arrow component</h2>
//         <card title="The Lion King" rating={5}/>
//         <card title="Avatar" isCool={true} />
//         <card title="Star wars" actors={[{name:'actors'}]}/>
//         <card2 title="Snow White"/>
//         </>
//     )
// }
// import "./App.css";

// function App() {
//   return <h1 className="title">Hello React</h1>;
// }

// export default App;
import { useState, useEffect, useRef } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const inputRef = useRef(null);

  // Load tasks from localStorage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
    inputRef.current.focus();
  };

  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>Task Tracker</h1>
      <input
        ref={inputRef}
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter new task"
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            <span
              style={{ textDecoration: t.completed ? "line-through" : "none" }}
              onClick={() => toggleComplete(index)}
            >
              {t.text}
            </span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>

      <p>Total Tasks: {tasks.length}</p>
      <p>Completed Tasks: {tasks.filter(t => t.completed).length}</p>
    </div>
  );
}

export default App;