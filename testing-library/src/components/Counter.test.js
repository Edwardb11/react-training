import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

describe("<Counter", () => {
  it("Prueba de que el titulo y estado se renderizan correctamente", () => {
    render(<Counter />);
    expect(screen.getByText("Counter:0").tagName).toBe("H2");
  });

  it("Verificar que el click +1 aumente correctamente", () => {
    render(<Counter />);
    const btn = screen.getByLabelText("aumentar");
    fireEvent.click(btn);
    expect(screen.getByRole("counter").textContent).toContain("Counter:1");
  });

  it("Verificar que el click -1 disminuya correctamente", () => {
    render(<Counter />);
    userEvent.click(screen.getByLabelText("disminuir"));
    expect(screen.getByRole("counter").textContent).toContain("Counter:-1");
  });

  it("Simular que alguien esta usando la App", () => {
    render(<Counter />);
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
});
