import { render } from "@testing-library/react";
import Counter from "./Counter";

test("Pruebas al componente Counter", () => {
  const wrapper = render(<Counter />);

//expect es valor actual y TOBE es el valor que espera
  expect(wrapper.getByText("Counter: 0").tagName).toBe("H2")
});
