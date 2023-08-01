import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../feature/Counter/CounterSlice";
import { useState } from "react";

const CounterComponent = () => {
  const [value, setValue] = useState(0);

  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>COUNTER STATE</h1>
      <h2>counter : {counter.value}</h2>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => dispatch(increment(Number(value) | 1))}>+</button>
      <button onClick={() => dispatch(decrement(Number(value) | 1))}>-</button>
    </div>
  );
};

export default CounterComponent;
