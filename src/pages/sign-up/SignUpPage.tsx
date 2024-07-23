import React, { FC } from 'react';
import css from './SignUpPage.module.css'
import SignUpComponent from '../../components/sign-up/SignUpComponent';

const SignUpPage: FC = () => {
    return (
        <div className={css.Container}>
            <SignUpComponent />
        </div>
    );
};

export default SignUpPage;