import React, {useState} from 'react';
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const Formulario = ({guardarGasto, guardarCrearGasto}) => {

    const [nombre, guardarNombre] = useState('');
    // Lo inicialice en '' y no en 0 porque si escribo 
    // numeros a continuacion del 0, el 0 se mantiene 
    const [cantidad, guardarCantidad] = useState('');
    const [error, guardarError] = useState(false);

    // cuando el usuario agrega un gasto
    const agregarGasto = e => {
        e.preventDefault();

        // validar
        if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){
            guardarError(true);
            return;
        }
        guardarError(false);

        // construir el gasto
        const gasto = {
            nombre,
            cantidad,
            id : shortid.generate()
        }

        console.log(gasto);

        // pasar el gasto al componente principal
        guardarGasto(gasto);
        guardarCrearGasto(true);

        // resetear el form
        guardarNombre('');
        guardarCantidad('');
    }

    return ( 
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aquí</h2>

            {error ? <Error mensaje="Ambos campos son obligatorios o Presupuesto Incorrecto"/> 
            : null}

            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Cantidad Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={e => guardarCantidad(parseInt(e.target.value))}
                />
            </div>

            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />
        </form>
     );
}
 
Formulario.propTypes = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
}

export default Formulario;