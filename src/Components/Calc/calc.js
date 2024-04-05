import "./calc.css";
import { useState } from "react";

export default function Calc() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrementCount = () => {
    setCount((prevCount) => prevCount - 2);
  };
  return (
    <div className="calc">
      <h1>Calculator</h1>
      <div className="btn">
        <button onClick={decrementCount}> - </button>
        <span> {count} </span>
        <button onClick={incrementCount}> + </button>
      </div>
    </div>
  );
}
