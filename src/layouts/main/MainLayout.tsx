import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import NavComponent from '../../components/nav/NavComponent';

const MainLayout: FC = () => {
    return (
        <div>
            <NavComponent />
            <Outlet />
        </div>
    );
};

export default MainLayout;