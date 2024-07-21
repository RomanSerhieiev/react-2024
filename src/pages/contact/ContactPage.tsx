import React, { FC, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const ContactPage: FC = () => {
    const [contact, setContact] = useState<any>({});
    const { id } = useParams()
    const { state: {contact: user} } = useLocation()

    useEffect(() => {
        if (user) {
            setContact(user)
        }

        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.json())
            .then(user => {
                setContact(user)
            })
    }, [id, user]);

    return (
        <div>
            <h3>{contact.id}. {contact.name}</h3>
        </div>
    );
};

export default ContactPage;