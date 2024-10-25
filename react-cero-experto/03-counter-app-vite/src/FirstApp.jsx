import PropTypes from 'prop-types'


const name = 'Ignacio';
const surname = 'Fernández Sánchez';

const nameObject = {
    name: 'Ignacio',
    surname: 'Fernández Sánchez'
}

export const FirstApp = ({ title, subtitle }) => {

    return (
        <>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <h1>{name + ' ' + surname}</h1>
        </>
    )
}

// Hacemos la PropType obligartoria
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
}

// Propiedades por defecto
FirstApp.defaultProps = {
    title: 'No hay titulo',
    subtitle: 'No hay subtitulo',
    //name: 'Ignacio Fernandez'
}