import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../models/contacto.class';


const ContactBcomponent = ({ Contacto }) => {
    return (
        <div>
            <h1>
                Nombre: {Contacto.Nombre}
            </h1>
            <h2>
                Apellido: {Contacto.Apellido}
            </h2>
            <h3>
                Email: {Contacto.Email}
            </h3>
            <h2>
                 {Contacto.Conectado ? 'Contacto En Linea' : 'Contacto No Disponible'}
            </h2>

        </div>
    );
};


ContactBcomponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ContactBcomponent;
