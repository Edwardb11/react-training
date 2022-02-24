export const operaciones = (numeros, setNumeros) => {
  const { numero1, numero2 } = numeros;

  const handleChange = (e) => {
    setNumeros({
      ...numeros,
      [e.target.name]: parseFloat(e.target.value),
    });
  };

  const suma = () => numero1 + numero2;

  const resta = () => numero1 - numero2;

  const multi = () => numero1 * numero2;

  const divi = () => numero1 / numero2;

  const reset = () => setNumeros({ numero1: 0, numero2: 0 });

  return { handleChange, suma, resta, multi, divi, reset, numero1, numero2 };
};
