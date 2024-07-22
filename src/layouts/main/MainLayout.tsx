import React, { FC } from 'react';
import HeaderComponent from '../../components/header/HeaderComponent';
import { Outlet } from 'react-router-dom';
import FooterComponent from '../../components/footer/FooterComponent';

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