import React, { useState } from "react";

function State() {
  const [state, setState] = useState(0);
  // setInterval(() => {
  //   console.log(state);
  //   setState(state + 1);
  // }, 3000);
  const handleClick = () => {
    setState(state + 1);
  };
  return (
    <div>
      Cuenta {state}
      <button onClick={handleClick}>+1</button>
    </div>
  );
}

export default State;
