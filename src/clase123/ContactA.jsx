import React from 'react';
import { Contacto } from '../models/contacto.class';
import ContactBcomponent from './contacto';

const ContactAcomponent = () => {

    const contacto = new Contacto('Matias', 'Flores', 'mati@gmail.com', false);
    return (
        <div>
            <div>
                Estado: 
            </div>
            <ContactBcomponent Contacto={contacto}></ContactBcomponent>

        </div>
    );
};

export default ContactAcomponent;
