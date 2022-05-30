import { useCallback, useMemo, useState } from "react";

export const useMemorizeApp = () => {
  const [counter, setCounter] = useState(100);
  const [view, setView] = useState(true);

  const pesado = (iter) => {
    for (let i = 0; i < iter; i++) {
      console.log("procesando");
    }

    return "Fin del proceso";
  };

  //recibe una funcion y un input como dependecia useMemo
  const pesadoMemo = useMemo(() => pesado(counter), [counter]);
  //useCallback recibe una funcion de que quieres ejecutar y una dependencia
  const add = useCallback(() => {
    setCounter((actual) => actual + 1);
  }, [setCounter]);

  const hide = useCallback(() => {
    setView(!view);
  }, [setView]);

  return [counter, pesadoMemo, add, hide];
};
