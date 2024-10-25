import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";


describe('Pruebas en 08-imp-exp', () => {

    test('getHerorById de retornar un héroe por ID', () => {
        const id = 1;
        const hero = getHeroeById(id)
        console.log(hero);

        expect(hero).toEqual({ "id": 1, "name": "Batman", "owner": "DC" });
    });

    test('getHerorById de retornar undefined si no existe el id', () => {
        const id = 100;
        const hero = getHeroeById(id)
        console.log(hero);

        expect(hero).toBeFalsy();
    });

    // Tarea (Pruebas sobre getHeroesByOwner)
    // Debe de retornar un array con los heros de DC
    // Lenght === 3
    // toEqual el array.
    test('getHeroesByOwner de retornar un listado de 3 heroes', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner)
        console.log(heroes);

        expect(heroes.length).toBe(3);
        expect(heroes).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);

    });

    test('getHeroesByOwner debe retornar un listado de 2 heroes', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner)
        console.log(heroes);

        expect(heroes.length).toBe(2);
        expect(heroes).toEqual(
            [
                { id: 2, name: 'Spiderman', owner: 'Marvel' },
                { id: 5, name: 'Wolverine', owner: 'Marvel' }
            ]);
    });
    // Debe de retorna un array de Marvel
    // lenght === 2.
});