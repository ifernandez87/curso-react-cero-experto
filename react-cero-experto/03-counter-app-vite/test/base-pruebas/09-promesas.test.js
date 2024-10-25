import { getHeroeById } from "../../src/base-pruebas/08-imp-exp";
import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => {

    test('getHeroeByIdAsync de retornar un héroe', (done) => {
        const id = 1;
        getHeroeByIdAsync(id).then(hero => {
            expect(hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            });
            done();
        })
    });

    test('getHeroeByIdAsync de retornar un error cuando el id no existe', (done) => {
        const id = 100;
        getHeroeByIdAsync(id).catch(error => {
            console.log(error);
            expect(error).toBe(`No se pudo encontrar el héroe, ${id}`)
            done();
        });
    })
});
