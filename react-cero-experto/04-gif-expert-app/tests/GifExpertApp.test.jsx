import { render } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Pruebas de <GifExpertApp/>", () => {
  test(" ", () => {
    render(<GifExpertApp />);
    screen.debug();
  });
});
