import React, { FC, useState } from 'react';
import css from './SignUpComponent.module.css';
import { useForm } from 'react-hook-form';
import { userService } from '../../services/user.service';
import { IUser } from '../../interfaces/user.interface';

const SignUpComponent: FC = () => {
    const [user, setUser] = useState<boolean>();
    const {
        handleSubmit,
        register
    } = useForm<IUser>();

    const signUp = async (signUpData: IUser) => {
        const res = await userService.post(signUpData);
        setUser(res);
    };

    return (
        <div className={css.Container}>
            <h3>Sign-up</h3>
            {user ?
                <div>You have successfully registered</div> :
                <form onSubmit={handleSubmit(signUp)}>
                    <label htmlFor="username">Enter your username:</label>
                    <input type="text" {...register('username')} />
                    <label htmlFor="password">Enter your password:</label>
                    <input type="text" {...register('password')} />
                    <button>REGISTER</button>
                </form>
            }
        </div>
    );
};

export default SignUpComponent;