import React, { FC } from 'react';
import HeaderComponent from '../../components/header/HeaderComponent';
import { Outlet } from 'react-router-dom';

const ErrorLayout: FC = () => {
    return (
        <div>
            <HeaderComponent />
            <h2>Error layout</h2>
            <Outlet />
        </div>
    );
};

export default ErrorLayout;