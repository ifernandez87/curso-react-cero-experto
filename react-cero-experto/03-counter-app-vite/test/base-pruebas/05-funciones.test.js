import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {

    test('getUser debe de retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();
        console.log(user);
        
        expect(testUser).toStrictEqual(user);
        expect(testUser.uid).toBe(user.uid);
        expect(testUser.username).toBe(user.username);

    });

    test('getUsuarioActivo debe de retornar un objeto', () => {

        const name = 'Ignacio';

        const user = getUsuarioActivo(name);
        console.log(user);
        
        expect(name).toStrictEqual(user.username);

    });

});
