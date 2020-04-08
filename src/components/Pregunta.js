import React, {Fragment, useState} from 'react';

const Pregunta = () => {
    
    // definir el state
    const [cantidad, guardarCantidad] = useState(0);
    
    // funcion que lee el presupuesto
    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value, 10));    
    }

    return ( 
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            <form>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    placeholder="Definir Presupuesto"
                />
            </form>
        </Fragment>
     );
}
 
export default Pregunta;