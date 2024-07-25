import React, { FC } from 'react';
import NavComponent from '../../components/nav/NavComponent';
import { Outlet } from 'react-router-dom';

const ErrorLayout: FC = () => {
    return (
        <div>
            <NavComponent />
            <h2>Error layout</h2>
            <Outlet />
        </div>
    );
};

export default ErrorLayout;