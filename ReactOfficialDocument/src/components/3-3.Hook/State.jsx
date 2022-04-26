import React, { useState } from "react";

const State = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={(prev) => setCount((prev) => prev - 1)}>-</button>
      <button onClick={(prev) => setCount((prev) => prev + 1)}>+</button>
    </div>
  );
};

export default State;
