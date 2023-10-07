import { useState } from "react";

function CounterFunction() {
  const [count, setCount] = useState(0);

  const addCount = (add) => {
    setCount((prev) => prev + add);
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => addCount(1)}>(+)</button>
      <button onClick={() => addCount(-1)}>(-)</button>
    </div>
  );
}

export default CounterFunction;
