import React, { FC, useState } from 'react';
import css from './SignInComponent.module.css'
import { useForm } from 'react-hook-form';
import { authService } from '../../services/auth.service';
import { IAuth } from '../../interfaces/auth.interface';

const SignInComponent: FC = () => {
    const [isSignIn, setIsSignIn] = useState<boolean>(false);
    const {
        handleSubmit,
        register
    } = useForm<IAuth>({
        defaultValues: {
            username: 'userRS1',
            password: 'P@$$word1'
        }
    });

    const signIn = async (signInData: IAuth) => {
        const res = await authService.auth(signInData);
        setIsSignIn(res);
    };

    return (
        <div className={css.Container}>
            <h3>Sign-in</h3>
            {isSignIn ?
                <div>You have successfully authenticated</div> :
                <form onSubmit={handleSubmit(signIn)}>
                    <label htmlFor="username">Enter your username:</label>
                    <input id="username" type="text" {...register('username')} />
                    <label htmlFor="password">Enter your password:</label>
                    <input id="password" type="text" {...register('password')} />
                    <button>LOGIN</button>
                </form>
            }
        </div>
    );
};

export default SignInComponent;