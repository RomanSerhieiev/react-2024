import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

const FooterComponent: FC = () => {
    return (
        <div>
            <hr />
            <div><NavLink to={'characters'}>Characters</NavLink></div>
            <div><NavLink to={'locations'}>Locations</NavLink></div>
            <div><NavLink to={'episodes'}>Episodes</NavLink></div>
        </div>
    );
};

export default FooterComponent;