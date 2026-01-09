// import { Provider, useDispatch, useSelector } from "react-redux";
// import { store, increment, decrement } from "../redux/store";

// function Counter() {
//   const count = useSelector(state => state.value);
//   const dispatch = useDispatch();

//   return (
//     <>
//       <p>Redux Count: {count}</p>
//       <button onClick={() => dispatch(increment())}>+</button>
//       <button onClick={() => dispatch(decrement())}>-</button>
//     </>
//   );
// }

// export default function ReduxScreen() {
//   return (
//     <Provider store={store}>
//       <div className="bg-orange-200 p-6 rounded">
//         <h2 className="font-bold">Redux Global State</h2>
//         <Counter />
//       </div>
//     </Provider>
//   );
// }


import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/store";

export default function ReduxScreen() {
  const value = useSelector((state) => state.value);
  const dispatch = useDispatch();

  return (
    <div className="bg-blue-900 min-h-screen flex flex-col items-center justify-center p-4 text-white">
      <h1 className="text-3xl font-bold mb-6">🛰 Redux Demo</h1>
      <div className="p-6 bg-blue-700 rounded shadow mb-4 text-2xl">
        Global Counter: {value}
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-green-500 rounded hover:bg-green-600"
        >
          +1
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 rounded hover:bg-red-600"
        >
          -1
        </button>
      </div>
    </div>
  );
}
