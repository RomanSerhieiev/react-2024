import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

const HeaderComponent: FC = () => {
    return (
        <ul>
            <li><NavLink to={'/'}>AUTH</NavLink></li>
            <li><NavLink to={'/cars'}>CARS</NavLink></li>
        </ul>
    );
};

export default HeaderComponent;