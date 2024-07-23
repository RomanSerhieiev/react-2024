import React, { FC } from 'react';
import css from './SignInPage.module.css'
import SignInComponent from '../../components/sign-in/SignInComponent';

const SignInPage: FC = () => {
    return (
        <div className={css.Container}>
            <SignInComponent />
        </div>
    );
};

export default SignInPage;