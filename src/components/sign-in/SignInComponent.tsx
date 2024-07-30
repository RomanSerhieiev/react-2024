import React, { FC, useState } from 'react';
import css from './SignInComponent.module.css';
import { useForm } from 'react-hook-form';
import { authService } from '../../services/auth.service';
import { IUser } from '../../interfaces/user.interface';
import { joiResolver } from '@hookform/resolvers/joi';
import { userValidator } from '../../validators/user.validator';

const SignInComponent: FC = () => {
    const [isSignIn, setIsSignIn] = useState<boolean>(false);
    const {
        handleSubmit,
        register,
        formState: {
            errors
        }
    } = useForm<IUser>({
        defaultValues: {
            username: 'userRS1',
            password: 'P@$$word1'
        },
        mode: 'all',
        resolver: joiResolver(userValidator)
    });

    const signIn = async (signInData: IUser) => {
        const response = await authService.auth(signInData);
        setIsSignIn(response);
    };

    return (
        <div className={css.Container}>
            <h3>Sign-in</h3>
            {isSignIn ?
                <div>You have successfully authenticated</div> :
                <form onSubmit={handleSubmit(signIn)}>
                    <label>Enter your username: <input type="text" {...register('username')} />
                        {errors.username && <div className={css.Error}>{errors.username.message}</div>}
                    </label>
                    <label>Enter your password: <input type="text" {...register('password')} />
                        {errors.password && <div className={css.Error}>{errors.password.message}</div>}
                    </label>
                    <button>LOGIN</button>
                </form>
            }
        </div>
    );
};

export default SignInComponent;