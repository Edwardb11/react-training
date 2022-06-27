import { render, screen } from "@testing-library/react";
import ButtonCounter from "./ButtonCounter";

describe("<ButtonCounter/>", () => {
  // simulacion => Mock scaneo
  const action = jest.fn();

  it("Cree un boton correctamente", () => {
    render(<ButtonCounter name="aumentar" value={3} action={action} />);
    // Espero que esta validacion exista en el documento
    expect(screen.getByLabelText("aumentar")).toBeInTheDocument();
  });
});
