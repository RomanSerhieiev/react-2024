import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { IAuth } from '../../interfaces/auth.interface';
import { userService } from '../../services/user.service';
import { IUser } from '../../interfaces/user.interface';

const SignUpComponent: FC = () => {
    const [user, setUser] = useState<IUser>();
    const {
        handleSubmit,
        register
    } = useForm<IAuth>();

    const signUp = async (signUpData: IAuth) => {
        const res = await userService.post(signUpData);
        setUser(res.data);
    };

    return (
        <div>
            <h3>Sign up form</h3>
            {user ?
                <div>You have successfully registered</div> :
                <form onSubmit={handleSubmit(signUp)}>
                    <input type="text" {...register('username')} />
                    <input type="text" {...register('password')} />
                    <button>REGISTER</button>
                </form>
            }
        </div>
    );
};

export default SignUpComponent;