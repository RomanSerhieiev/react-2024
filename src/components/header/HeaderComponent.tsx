import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

const HeaderComponent: FC = () => {
    return (
        <ul>
            <li><NavLink to={'/'}>main</NavLink></li>
            <li><NavLink to={'users'}>users</NavLink></li>
            <li><NavLink to={'posts'}>posts</NavLink></li>
            <li><NavLink to={'user-posts'}>user-posts</NavLink></li>
        </ul>
    );
};

export default HeaderComponent;