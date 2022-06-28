import { render, screen } from "@testing-library/react";
import Cards from "../components/Cards";

describe("<Cards/>", () => {
  it("Snapshot cards", () => {
    render(<Cards />);
    expect(screen.getByLabelText("imagenes")).toMatchSnapshot();
  });
  it("Snapshot card",async () => {
    render(<Cards />);
    // console.log(await screen.findAllByLabelText("img"))
    const res = await screen.findAllByLabelText("img");

    expect(res).toMatchSnapshot();
  });
});
