import React, { FC, useState } from 'react';
import css from './SignUpComponent.module.css';
import { useForm } from 'react-hook-form';
import { userService } from '../../services/user.service';
import { IUser } from '../../interfaces/user.interface';
import { joiResolver } from '@hookform/resolvers/joi';
import { userValidator } from '../../validators/user.validator';

const SignUpComponent: FC = () => {
    const [user, setUser] = useState<boolean>();
    const {
        handleSubmit,
        register,
        formState: {
            errors
        }
    } = useForm<IUser>({
        mode: 'all',
        resolver: joiResolver(userValidator)
    });

    const signUp = async (signUpData: IUser) => {
        const response = await userService.post(signUpData);
        setUser(response);
    };

    return (
        <div className={css.Container}>
            <h3>Sign-up</h3>
            {user ?
                <div>You have successfully registered</div> :
                <form onSubmit={handleSubmit(signUp)}>
                    <label>Enter your username: <input type="text" {...register('username')} />
                        {errors.username && <div className={css.Error}>{errors.username.message}</div>}
                    </label>
                    <label>Enter your password: <input type="text" {...register('password')} />
                        {errors.password && <div className={css.Error}>{errors.password.message}</div>}
                    </label>
                    <button>REGISTER</button>
                </form>
            }
        </div>
    );
};

export default SignUpComponent;