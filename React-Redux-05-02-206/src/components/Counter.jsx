import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../features/counter/counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="card">
      <h1 className="title">Count: {count}</h1>

      <div className="buttons">
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
}
