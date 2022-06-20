import { render } from "@testing-library/react";
import Counter from "./Counter";

describe("<Counter/>", () => {
  it("Pruebas de que el titulo y estado se renderizan correctamente", () => {
    const wrapper = render(<Counter />);

    //expect es valor actual y TOBE es el valor que espera
    expect(wrapper.getByText("Counter: 0").tagName).toBe("H2");
  });

  it("Prueba que 1 + 1 es 2 no es 3", () => {
    expect(1 + 1).toBe(2);
    expect(1 + 1).not.toBe(3);
  });
});
