import React, { useState } from "react";
import PropTypes from "prop-types";

import Resultado from "./Resultado";
import { operaciones } from "../helpers/operaciones";

const NumberInput = () => {
  const [numeros, setNumeros] = useState({
    numero1: 10,
    numero2: 5,
  });

  const { handleChange, suma, resta, multi, divi, reset, numero1, numero2 } =
    operaciones(numeros, setNumeros);

  return (
    <>
      <label className="mx-2">
        Número 1:{" "}
        <input
          name="numero1"
          value={numero1}
          onChange={handleChange}
          type="number"
        />
      </label>
      <label className="mx-2">
        Número 2:{" "}
        <input
          name="numero2"
          value={numero2}
          onChange={handleChange}
          type="number"
        />
      </label>
      <button className="btn btn-danger" onClick={() => reset()}>
        Restablecer
      </button>
      <Resultado operacion="Suma" calculo={isNaN(suma()) ? 0 : suma()} />
      <Resultado operacion="Resta" calculo={isNaN(resta()) ? 0 : resta()} />
      <Resultado
        operacion="Multiplicación"
        calculo={isNaN(multi()) ? 0 : multi()}
      />
      <Resultado operacion="División" calculo={isNaN(divi()) ? 0 : divi()} />
    </>
  );
};

NumberInput.propTypes = {
  name: PropTypes.string,
};

export default NumberInput;
