import React, { FC } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const ContactComponent: FC<any> = ({contact}) => {
    const navigate = useNavigate();

    const onClickNavigateHandler = () => {
        navigate(`${contact.id}`, {state: {contact}})
    }

    return (
        <div>
            {/*{contact.email} <NavLink to={`${contact.id}`} state={{contact}}>details</NavLink>*/}
            {contact.email} <button onClick={onClickNavigateHandler}>details by button</button>
        </div>
    );
};

export default ContactComponent;