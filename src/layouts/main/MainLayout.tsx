import React, { FC } from 'react';
import HeaderComponent from '../../components/header/HeaderComponent';
import FooterComponent from '../../components/footer/FooterComponent';
import { Outlet } from 'react-router-dom';

const MainLayout: FC = () => {
    return (
        <div>
            <HeaderComponent />
            <Outlet />
            <FooterComponent />
        </div>
    );
};

export default MainLayout;