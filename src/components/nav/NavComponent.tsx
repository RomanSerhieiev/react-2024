import React, { FC } from 'react';
import css from './NavComponent.module.css'
import { NavLink } from 'react-router-dom';

const NavComponent: FC = () => {
    return (
        <div className={css.Container}>
            <NavLink to={'/'}><button>LOGIN</button></NavLink>
            <NavLink to={'/sign-up'}><button>REGISTER</button></NavLink>
            <NavLink to={'/cars'}><button>CARS</button></NavLink>
            <NavLink to={'/account'}><button>PROFILE</button></NavLink>
        </div>
    );
};

export default NavComponent;