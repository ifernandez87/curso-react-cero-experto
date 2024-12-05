import { AddCategory } from "../../src/components/AddCategory";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Pruebas en <AddCategory/>", () => {
  test("debe de cambiar el valor en la caja de texto", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    // Recuperamos la caja de texto
    const input = screen.getByRole("textbox");
    // Disparamos el evento (input,evento)
    fireEvent.input(input, { target: { value: "Saitama" } });

    expect(input.value).toBe("Saitama");
    //screen.debug();
  });

  test("Debe de llamar onNewCategory si el input tiene un valor", () => {
    const inputValue = "Saitama";
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    expect(input.value).toBe("");

    // Verifica que la funcion fue llamada
    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    // Verifica que la funcion ha sido llamada con el valor de la caja de texto.
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    //screen.debug();
  });

  test("No debe de llamar onNewCategory si el input esta vacio", () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);

    const form = screen.getByRole("form");
    fireEvent.submit(form);

    // Verifica que la funcion NO fue llamada
    expect(onNewCategory).not.toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(0);
    //screen.debug();
  });
});
