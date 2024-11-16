import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        console.log('Change Value=', target.value);
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        {/* Verificar que al menos existe un caracter. */ }
        if (inputValue.trim().length <= 1) {
            return;
        }
        console.log('Submit=', inputValue);
        onNewCategory(inputValue.trim())
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar Images"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )

}