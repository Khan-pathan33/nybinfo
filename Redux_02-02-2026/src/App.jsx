import { Provider, useDispatch, useSelector } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

/* ---------------- REDUX SLICE ---------------- */
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

const { increment, decrement, incrementByAmount } = counterSlice.actions;

/* ---------------- REDUX STORE ---------------- */
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

/* ---------------- UI COMPONENT ---------------- */
function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
      <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl text-center text-white w-80">
        <h1 className="text-3xl font-bold mb-4">Redux Counter</h1>

        <div className="text-6xl font-extrabold mb-6 text-yellow-300">
          {count}
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => dispatch(decrement())}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg font-semibold"
          >
            −
          </button>

          <button
            onClick={() => dispatch(increment())}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg font-semibold"
          >
            +
          </button>

          <button
            onClick={() => dispatch(incrementByAmount(5))}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold"
          >
            +5
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------------- APP WITH PROVIDER ---------------- */
export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
