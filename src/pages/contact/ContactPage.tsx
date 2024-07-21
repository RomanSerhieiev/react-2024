import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { userService } from '../../services/user.service';
import { IUser } from '../../interfaces/user.interface';
import { useAppLocation } from '../../hooks/useAppLocation';

const ContactPage: FC = () => {
    const [contact, setContact] = useState<IUser | null>(null);
    const { id } = useParams()
    const { state: {contact: user} } = useAppLocation<{ contact: IUser }>()

    useEffect(() => {
        if (user) {
            setContact(user)
        } else if (id) {
            userService.getById(id)
                .then(value => {
                    setContact(value.data)
                })
        } else {
            throw new Error(`Couldn't find user with id ${id}`)
        }
    }, [id, user]);

    return (
        <div>
            <h3>{contact && <>{contact.id}. {contact.name}</>}</h3>
        </div>
    );
};

export default ContactPage;