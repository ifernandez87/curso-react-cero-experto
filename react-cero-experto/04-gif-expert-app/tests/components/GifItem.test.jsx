import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Pruebas del componente GifItem", () => {
  const title = "Saitama";
  const url = "https://one-punch.com/saitama";
  test("Debe de hacer match con el snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });
  test("Debe de mostrar la imagen con el URL y el ALT indicado", () => {
    render(<GifItem title={title} url={url} />);
    screen.debug();
    console.log(screen.getByRole("img").src);
    // Asercción del titulo
    expect(screen.getByRole("img").alt).toBe(title);
    // Asercción de la url
    expect(screen.getByRole("img").src).toBe(url);
    // Otra forma de evaluarlo
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });
});
