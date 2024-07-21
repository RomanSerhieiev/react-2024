import React, { FC } from 'react';
import HeaderComponent from '../../components/header/HeaderComponent';
import FooterComponent from '../../components/footer/FooterComponent';

const ErrorLayout: FC = () => {
    return (
        <div>
            <HeaderComponent />
            <h2>Error layout</h2>
            <FooterComponent />
        </div>
    );
};

export default ErrorLayout;