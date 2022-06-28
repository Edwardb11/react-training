import { render, screen } from "@testing-library/react";
import axios from "axios";
import Cards from "../components/Cards";
import { images } from "../__mocks__/images";

describe("<Cards/>", () => {
  it("Snapshot cards", () => {
    render(<Cards />);
    expect(screen.getByLabelText("imagenes")).toMatchSnapshot();
  });
  it("Snapshot card", async () => {
    // Simulacion de peticion MOCK
    axios.get = jest.fn().mockResolvedValue({ data: images });
    render(<Cards />);

    // console.log(await screen.findAllByLabelText("img"))
    const res = await screen.findAllByLabelText("img");

    // expect(res).toMatchSnapshot();
    expect(res).toHaveLength(10);
  });
});
