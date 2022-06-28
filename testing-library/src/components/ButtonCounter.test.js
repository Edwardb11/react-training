import { render, screen } from "@testing-library/react";
import ButtonCounter from "./ButtonCounter";

describe("<ButtonCounter/>", () => {
  // simulacion => Mock scaneo
  const action = jest.fn();

  beforeEach(() => {
    render(<ButtonCounter name="aumentar" value={3} action={action} />);
  });
  it("Cree un boton correctamente", () => {
    // Espero que esta validacion exista en el documento
    expect(screen.getByLabelText("aumentar")).toBeInTheDocument();
  });
  // it("Cree un boton correctamente sin mandar value", () => {
  //   render(<ButtonCounter name="aumentar"  action={action} />);
  //   expect(screen.getByLabelText("aumentar")).toBeInTheDocument();
  // });

  it("Cree un boton correctamente  Snapshot", () => {
    // Espero que esta validacion exista en el documento
    expect(screen.getByLabelText("aumentar")).toMatchSnapshot();
  });
});
