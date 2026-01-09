// function Child({ message }) {
//   return <p className="text-blue-800">Message: {message}</p>;
// }

// export default function PropsScreen() {
//   return (
//     <div className="bg-blue-200 p-6 rounded">
//       <h2 className="font-bold">Props Example</h2>
//       <Child message="Passed via props" />
//     </div>
//   );
// }

function Child({ message }) {
  return (
    <div className="p-4 bg-blue-200 rounded shadow mt-2">
      Child received: <b>{message}</b>
    </div>
  );
}

export default function PropsScreen() {
  const msg = "Hello from Parent!";
  return (
    <div className="bg-blue-100 min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">📦 Props Demo</h1>
      <Child message={msg} />
    </div>
  );
}
