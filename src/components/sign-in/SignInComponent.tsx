import React, { FC, useState } from 'react';
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
        <div>
            <h3>Sign in form</h3>
            {isSignIn ?
                <div>You have successfully authenticated</div> :
                <form onSubmit={handleSubmit(signIn)}>
                    <input type="text" {...register('username')} />
                    <input type="text" {...register('password')} />
                    <button>LOGIN</button>
                </form>
            }
        </div>
    );
};

export default SignInComponent;