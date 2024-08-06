import React, { FC } from 'react';
import css from './MainLayout.module.css';
import { Outlet } from 'react-router-dom';
import HeaderComponent from '../../components/header/HeaderComponent';

const MainLayout: FC = () => {
    return (
        <div className={css.Container}>
            <HeaderComponent />
            <Outlet />
        </div>
    );
};

export default MainLayout;