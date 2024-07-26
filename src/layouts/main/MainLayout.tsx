import React, { FC } from 'react';
import css from './MainLayout.module.css'
import { Outlet } from 'react-router-dom';
import NavComponent from '../../components/nav/NavComponent';

const MainLayout: FC = () => {
    return (
        <div className={css.Container}>
            <NavComponent />
            <Outlet />
        </div>
    );
};

export default MainLayout;