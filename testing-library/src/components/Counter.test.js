import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

describe("<Counter/>", () => {
  // Antes de cada ejecucion de una prueba ejecutara este codigo
  beforeEach(() => {
    render(<Counter />);
  });

  // Despues de cada prueba se ejecuta
  // afterEach(()=>{
  //   userEvent.click(screen.getByLabelText("reset"));
  // })

  // Snapshot
  it("Primer Snapshot", () => {
    expect(screen.getByRole("counter")).toMatchSnapshot();
  });

  it("Prueba de que el titulo y estado se renderizan correctamente", () => {
    expect(screen.getByText("Counter:0").tagName).toBe("H2");
  });

  it("Verificar que el click +1 aumente correctamente", () => {
    const btn = screen.getByLabelText("aumentar");
    fireEvent.click(btn);
    expect(screen.getByRole("counter").textContent).toContain("Counter:1");
  });

  it("Verificar que el click -1 disminuya correctamente", () => {
    userEvent.click(screen.getByLabelText("disminuir"));
    expect(screen.getByRole("counter").textContent).toContain("Counter:-1");
  });

  it("Simular que alguien esta usando la App", () => {
    const btnAdd = screen.getByLabelText("aumentar");
    const btnDis = screen.getByLabelText("disminuir");

    userEvent.click(btnAdd);
    userEvent.click(btnAdd);
    userEvent.click(btnAdd);
    userEvent.click(btnAdd);

    userEvent.click(btnDis);
    userEvent.click(btnDis);

    expect(screen.getByRole("counter").textContent).toContain("Counter:2");
  });

  it("Reset button", () => {
    const btnAdd = screen.getByLabelText("aumentar");

    userEvent.click(btnAdd);
    userEvent.click(btnAdd);
    userEvent.click(btnAdd);
    userEvent.click(btnAdd);
    userEvent.click(btnAdd);
    userEvent.click(btnAdd);

    // button reset
    userEvent.click(screen.getByLabelText("reset"));

    expect(screen.getByRole("counter").textContent).toContain("Counter:0");
  });
});
