import React, { FC, useEffect, useState } from 'react';
import ContactComponent from '../contact/ContactComponent';
import { IUser } from '../../interfaces/user.interface';
import { userService } from '../../services/user.service';

const ContactsComponent: FC = () => {
    const [contacts, setContacts] = useState<IUser[]>([]);
    
    useEffect(() => {
        userService.getAll()
            .then(value => {
                setContacts(value.data)
            })
    }, []);

    return (
        <div>
            {contacts.map((contact, i) => <ContactComponent key={i} contact={contact} />)}
        </div>
    );
};

export default ContactsComponent;