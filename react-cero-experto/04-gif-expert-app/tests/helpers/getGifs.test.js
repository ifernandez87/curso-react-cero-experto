import { getGifs } from "../../src/helpers/getGifs";

describe("Pruebas de getGifs", () => {
  test("Debe de retornar un Array de Gifs", async () => {
    const gifs = await getGifs("Goles");
    // Verificacion del numero de elementos
    expect(gifs.length).toBeGreaterThan(0);

    // Verificacion de estructura.
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
