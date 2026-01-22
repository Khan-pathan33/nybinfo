import FunctionalComponent from "./components/FunctionalComponent.jsx";
import ClassComponent from "./components/ClassComponent.jsx";


function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center gap-8 p-10">
      <h1 className="text-3xl font-bold">
        React Components Project
      </h1>

      <div className="flex gap-8">
        <FunctionalComponent />
        <ClassComponent />
      </div>
    </div>
  );
}

export default App;
