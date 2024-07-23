import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

const HeaderComponent: FC = () => {
    return (
        <ul>
            <li><NavLink to={'/sign-in'}>LOGIN</NavLink></li>
            <li><NavLink to={'/sign-up'}>REGISTER</NavLink></li>
            <li><NavLink to={'/cars'}>CARS</NavLink></li>
            <li><NavLink to={'/account'}>PROFILE</NavLink></li>
        </ul>
    );
};

export default HeaderComponent;