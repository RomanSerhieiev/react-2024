import React, { FC, useEffect, useState } from 'react';
import ContactComponent from '../contact/ContactComponent';

const ContactsComponent: FC = () => {
    const [contacts, setContacts] = useState([]);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => {
                setContacts(users)
            })
    }, []);

    return (
        <div>
            {contacts.map((contact, i) => <ContactComponent key={i} contact={contact} />)}
        </div>
    );
};

export default ContactsComponent;