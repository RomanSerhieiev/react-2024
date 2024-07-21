import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

const HeaderComponent: FC = () => {
    return (
        <div>
            <div><NavLink to={'characters'}>Characters</NavLink></div>
            <div><NavLink to={'locations'}>Locations</NavLink></div>
            <div><NavLink to={'episodes'}>Episodes</NavLink></div>
            <hr />
        </div>
    );
};

export default HeaderComponent;