import React, { useState } from "react";

const Counter = () => {
  const [conter, setCounter] = useState(0);

  const handleAdd = () => {
    setCounter(Counter + 1);
  };
  const handleDis = () => {
    setCounter(Counter - 1);
  };
  return (
    <>
      <h2 role="counter">Counter: {conter}</h2>
      <button aria-label="aumentar" onClick={handleAdd}>
        +1
      </button>
      <button aria-label="disminuir" onClick={handleDis}>
        -1
      </button>
    </>
  );
};

export default Counter;
