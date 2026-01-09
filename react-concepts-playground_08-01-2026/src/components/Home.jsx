// export default function Home() {
//   return (
//     <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-10 rounded text-white">
//       <h1 className="text-4xl font-bold">React Concepts Playground</h1>
//       <p className="mt-4">Navigate buttons above to see each concept live.</p>
//     </div>
//   );
// }


export default function Home({ setScreen }) {
  const concepts = [
    { key: "jsx", label: "JSX" },
    { key: "state", label: "State" },
    { key: "props", label: "Props" },
    { key: "propsDrilling", label: "Props Drilling" },
    { key: "context", label: "Context API" },
    { key: "redux", label: "Redux" },
    { key: "lifecycle", label: "Lifecycle" },
    { key: "conditional", label: "Conditional Rendering" },
    { key: "fragment", label: "Fragments" },
  ];

  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-4xl font-bold mb-6">🚀 React Concepts Lab</h1>
      {concepts.map(c => (
        <button
          key={c.key}
          onClick={() => setScreen(c.key)}
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition"
        >
          {c.label}
        </button>
      ))}
    </div>
  );
}
