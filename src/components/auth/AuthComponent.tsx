import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { authService } from '../../services/auth.service';
import { IAuth } from '../../interfaces/auth.interface';

const AuthComponent: FC = () => {
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const {
        handleSubmit,
        register
    } = useForm<IAuth>();

    const authenticate = async (auth: IAuth) => {
        const isAuth = await authService.authentication(auth)
        setIsAuth(isAuth)
    };

    return (
        <div>
            <h3>Login form</h3>
            {isAuth ? <div>ok</div> : <div>not ok</div>}
            <form onSubmit={handleSubmit(authenticate)}>
                <input type="text" {...register('username')} />
                <input type="text" {...register('password')} />
                <button>LOGIN</button>
            </form>
        </div>
    );
};

export default AuthComponent;