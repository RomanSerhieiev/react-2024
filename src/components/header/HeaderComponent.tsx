import React, { FC } from 'react';
import css from './HeaderComponent.module.css';
import { NavLink } from 'react-router-dom';

const HeaderComponent: FC = () => {
    return (
        <div className={css.Container}>
            <NavLink to={'albums'}>
                <button>ALBUMS</button>
            </NavLink>
            <NavLink to={'comments'}>
                <button>COMMENTS</button>
            </NavLink>
            <NavLink to={'photos'}>
                <button>PHOTOS</button>
            </NavLink>
            <NavLink to={'posts'}>
                <button>POSTS</button>
            </NavLink>
            <NavLink to={'todos'}>
                <button>TODOS</button>
            </NavLink>
            <NavLink to={'users'}>
                <button>USERS</button>
            </NavLink>
        </div>
    );
};

export default HeaderComponent;