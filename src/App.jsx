import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increasebyAmount,
  increment,
} from "./features/counterSlice";

const App = () => {
  const dispatch = useDispatch(); // working task
  const count = useSelector((state) => state.counter.value); // only use show
  const [num, setNum] = useState(5);
  return (
    <div className="flex flex-col w-40 gap-2 p-5">
      <h1 className="text-2xl">count is {count}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
        className="bg-green-500 text-white p-2 rounded cursor-pointer"
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
        className="bg-red-500 text-white p-2 rounded cursor-pointer"
      >
        Decrement
      </button>

      <input
        className="border border-sky-500 outline-0 rounded"
        type="number"
        value={num}
        onChange={(e) => {
          setNum(e.target.value);
        }}
      />

      <button
        onClick={() => {
          dispatch(increasebyAmount(Number(num)));
        }}
        className="bg-sky-500 text-white p-2 rounded cursor-pointer"
      >
        Increase by Amount
      </button>
    </div>
  );
};

export default App;
