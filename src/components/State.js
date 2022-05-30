import React, { useEffect, useState } from "react";

const State = () => {
  const [state, setState] = useState(0);
  // setInterval(() => {
  //   console.log(state);
  //   setState(state + 1);
  // }, 3000);

  useEffect(() => {
    console.log(state);
  }, []);
  const handleClick = () => {
    setState(state + 1);
  };
  return (
    <div>
      <h1>UseState</h1>
      Cuenta {state}
      <button onClick={handleClick}>+1</button>
    </div>
  );
};

export default State;
