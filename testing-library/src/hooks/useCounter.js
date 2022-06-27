
import { useState } from "react";

export const useCounter = () => { 

    const [counter, setCounter] = useState(0);

    const handleModifyCounter = (value =1) => {
      setCounter(counter + value);
    };
    return {counter,handleModifyCounter}
  
 }
 