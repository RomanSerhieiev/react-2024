import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

const HeaderComponent: FC = () => {
    return (
        <div>
            <div><NavLink to={'/'}>Main</NavLink></div>
            <div><NavLink to={'about'}>About</NavLink></div>
            <div><NavLink to={'contacts'}>Contacts</NavLink></div>
            <hr />
        </div>
    );
};

export default HeaderComponent;