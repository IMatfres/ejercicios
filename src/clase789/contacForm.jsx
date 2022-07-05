import React, { useRef } from 'react';
import PropsTypes from 'prop-types'
import { Contacto } from '../models/contacto.class';

const ContactForm = ({ addContact }) => {
    const nameRef = useRef('');
    const apellidoRef = useRef('');
    const emailRef = useRef('');

    function addContacs(e) {
        e.preventDefault();
        const createdContact = new Contacto(nameRef.current.value, apellidoRef.current.value, emailRef.current.value, false);
        addContact(createdContact);
    }

    return (
        <form onSubmit={addContacs} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input
                    placeholder='contact name'
                    ref={nameRef}
                    id='inputName'
                    type='text'
                    className='from-control form-control-lg'
                    required autoFocus
                />
                <input
                    placeholder='contact apellido'
                    ref={apellidoRef}
                    id='inputApellido'
                    type='text'
                    className='from-control form-control-lg'
                    required
                />
                <input
                    placeholder='contact Email'
                    ref={emailRef}
                    id='inputEmail'
                    type='text'
                    className='from-control form-control-lg'
                    required
                />
            </div>
            <button type='submit' className='btn btn-success btn-lg ms-2'>
                Add Contact
            </button>
        </form>
    );
}

ContactForm.PropsTypes = {
    addContact: PropsTypes.func.isRequired
}

export default ContactForm;
