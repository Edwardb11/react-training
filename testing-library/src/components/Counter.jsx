import React from "react";
import { useCounter } from "../hooks/useCounter";
import ButtonCounter from "./ButtonCounter";

const Counter = () => {
  const { counter, handleModifyCounter,handleReset } = useCounter();
  return (
    <>
      <h2 role="counter">Counter:{counter}</h2>

      <ButtonCounter name="aumentar" action={handleModifyCounter} />
      <button aria-label="reset" onClick={handleReset} >Reset</button>
      <ButtonCounter name="disminuir" action={handleModifyCounter} value={-1} />
 
    </>
  );
};

export default Counter;
