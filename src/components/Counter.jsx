import React, { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  function increment() {
    setValue((prev) => {
      return prev + 1;
    });
  }

  function decrement() {
    setValue((prev) => {
      return prev - 1;
    });
  }
  return (
    <>
      <div className="text-5xl">{value}</div>
      <div className="flex space-between gap-x-3">
        <span
          className="border p-3 bg-gray-300 rounded-md text-3xl"
          onClick={increment}
        >
          +
        </span>
        <span
          className="border p-3 bg-gray-300 rounded-md text-3xl"
          onClick={decrement}
        >
          -
        </span>
      </div>
    </>
  );
};

export default Counter;
