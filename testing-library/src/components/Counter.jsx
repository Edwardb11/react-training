import React from "react";
import { useCounter } from "../hooks/useCounter";

const Counter = () => {
  const { counter, handleModifyCounter } = useCounter();
  return (
    <>
      <h2 role="counter">Counter:{counter}</h2>
      <button aria-label="aumentar" onClick={() => handleModifyCounter()}>
        +1
      </button>
      <button aria-label="disminuir" onClick={() => handleModifyCounter(-1)}>
        -1
      </button>
    </>
  );
};

export default Counter;
