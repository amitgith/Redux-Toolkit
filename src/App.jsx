import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increasebyAmount,
  increment,
} from "./features/counterSlice";

const App = () => {
  const dispatch = useDispatch(); // working task
  const count = useSelector((state) => state.counter.value); // only use show
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
      <button
        onClick={() => {
          dispatch(increasebyAmount(10));
        }}
        className="bg-sky-500 text-white p-2 rounded cursor-pointer"
      >
        Increase by Amount
      </button>
    </div>
  );
};

export default App;
