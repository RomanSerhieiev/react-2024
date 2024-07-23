import React, { FC } from 'react';
import css from './MainLayout.module.css'
import NavComponent from '../../components/nav/NavComponent';
import { Outlet } from 'react-router-dom';

const MainLayout: FC = () => {
    return (
        <div className={css.Container}>
            <NavComponent />
            <Outlet />
        </div>
    );
};

export default MainLayout;