import { memo } from "react";

const Dato = ({ value }) => {
  console.log("Otra vez me cargue");

  return <p>{value}</p>;
};

//funcion para memorizar el estdo del componente
export default memo(Dato);
