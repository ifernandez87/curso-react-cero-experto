
import { render } from '@testing-library/react';
import { FirstApp } from "../src/FirstApp";


describe('Prueba en <FirstApp />', () => {

    test('debe de hacer match con el snapshot', () => {

        const title = 'Hola, Soy Goku'
        render(<FirstApp title={title} />)

        

    });
});