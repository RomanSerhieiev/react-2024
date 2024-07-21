import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

const NavComponent: FC = () => {
    return (
        <ul>
            <li><NavLink to={'posts'}>Posts</NavLink></li>
            <li><NavLink to={'comments'}>Comments</NavLink></li>
            <li><NavLink to={'albums'}>Albums</NavLink></li>
            <li><NavLink to={'photos'}>Photos</NavLink></li>
            <li><NavLink to={'todos'}>Todos</NavLink></li>
            <li><NavLink to={'users'}>Users</NavLink></li>
            <hr />
        </ul>
    );
};

export default NavComponent;