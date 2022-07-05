import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../models/contacto.class';
import '../styles/contact.scss';


const ContactComponent = ({ contact, state, deletee }) => {

    useEffect(() => {
        console.log('Usuario Creado');
        return () => {
            console.log(`...`);
        };
    }, [contact]);

    function isOnlineIcon() {
        if (contact.Conectado) return (<i onClick={() => state(contact)} className='bi-toggle-on contact-action' style={{ color: 'green' }}></i>)
        return (<i onClick={() => state(contact)} className='bi-toggle-off contact-action' style={{ color: 'grey' }}></i>)
    }


    return (
        <tr className='fw-normal'>
            <td>
                <span className='ms-2'>
                    {contact.Nombre}
                </span>
            </td>
            <td className='aling-middle'>
                <span>
                    {contact.Apellido}
                </span>
            </td>
            <td className='aling-middle'>
                <span>
                    {contact.Email}
                </span>
            </td>
            <td className='aling-middle'>
                {isOnlineIcon()}
            </td>
            <td className='aling-middle'>
                <i className='bi-trash contact-action' onClick={() => deletee(contact)} style={{ color: 'tomato' }}></i>
            </td>
        </tr>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contacto).isRequired,
    state: PropTypes.func.isRequired,
    deletee: PropTypes.func.isRequired
};


export default ContactComponent;
