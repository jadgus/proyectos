import React, {Fragment, useState} from 'react';
import uuid from 'uuid/dist/v4';
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {

const [cita, actualizarCita] = useState ({

    mascota:'',
    propietario:'',
    fecha:'',
    hora:'',
    sintomas:''
});

const[error, actualizarError] = useState(false)

const actualizarState = e => {

    actualizarCita({
        ...cita,
        [e.target.name]: e.target.value
    })
}

const {mascota, propietario, fecha, hora, sintomas} = cita; 

const submitCita = e => {
    e.preventDefault();

    if(mascota.trim()=== '' || propietario.trim()=== '' || fecha.trim()=== '' || hora.trim()=== '' || sintomas.trim()=== ''){
        actualizarError(true);
        return;
    }

    actualizarError(false);
    cita.id = uuid();

    crearCita(cita);

    actualizarCita({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    })

}

return (
    <Fragment>
        <h2>Crear cita</h2>

        {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

        <form
          onSubmit={submitCita}
        >
            <label>Nombre mascota</label>
            <input
                type="text"
                name="mascota"
                className="u-full-width"
                placeholder="Nombre mascota"
                onChange={actualizarState}
                value={mascota}
            />

            <label>Nombre dueño</label>
            <input
                type="text"
                name="propietario"
                className="u-full-width"
                placeholder="Nombre dueño de la mascota"
                onChange={actualizarState}
                value={propietario}
            />

            <label>Fecha</label>
            <input
                type="date"
                name="fecha"
                className="u-full-width"
                onChange={actualizarState}
                value={fecha}
            />
            <label>Hora</label>
            <input
                type="time"
                name="hora"
                className="u-full-width"
                onChange={actualizarState}
                value={hora}
            />

            <label>Sintomas</label>
            <textarea
                className="u-full-width"
                name="sintomas"
                onChange={actualizarState}
                value={sintomas}
            ></textarea>

            <button
                type="submit"
                className="u-full-width button-primary"
            >Agregar cita</button>

        </form>

    </Fragment>
);

}


Formulario.propTypes = {

    crearCita: PropTypes.func.isRequired


}







export default Formulario; 