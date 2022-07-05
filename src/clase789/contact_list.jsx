import React, { useState, useEffect } from 'react';
import '../styles/contact.scss';
import { Contacto } from '../models/contacto.class';
import ContactForm from './contacForm';
import ContactComponent from './contact';


const ContactListComponent = () => {

    const contacto1 = new Contacto('Matias', 'Flores', 'mati@gmail.com', false);
    const contacto2 = new Contacto('Javier', 'Flores', 'javi@gmail.com', false);
    const contacto3 = new Contacto('Romina', 'Flores', 'romi@gmail.com', false);

    const [contacts, setContacts] = useState([contacto1, contacto2, contacto3]);
    useEffect(() => {
        return () => {
            console.log('...');
        };
    }, [contacts]);

    function isOnlineContact(contact) {
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts[index].Conectado = !tempContacts[index].Conectado;
        setContacts(tempContacts);
    }

    function deleteContact(contact) {
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.splice(index, 1);
        setContacts(tempContacts);
    }

    function addContact(contact) {
        const tempContacts = [...contacts];
        tempContacts.push(contact);
        setContacts(tempContacts);
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>
                            Lista
                        </h5>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '400px' }}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>
                                        Name
                                    </th>
                                    <th scope='col'>
                                        Last Name
                                    </th>
                                    <th scope='col'>
                                        Email
                                    </th>
                                    <th scope='col'>
                                        Online
                                    </th>
                                    <th scope='col' style={{ padding: '10px' }}>
                                        Actions
                                    </th>
                                </tr>
                            </thead> {/** the header cards */}
                            <tbody>
                                {contacts.map((contact, index) => {
                                    return (
                                        <ContactComponent key={index} contact={contact} state={isOnlineContact} deletee={deleteContact}></ContactComponent>
                                    )
                                })}

                            </tbody>
                        </table>
                    </div>
                    <ContactForm addContact={addContact}></ContactForm>
                </div>
            </div>
        </div>
    );
};

export default ContactListComponent;
