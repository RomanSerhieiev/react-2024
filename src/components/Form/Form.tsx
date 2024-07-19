import React, { FC } from 'react';
import { useForm } from 'react-hook-form';

interface IFormProps {
    username: string,
    password: string,
    age: number
}

const Form: FC = () => {
    const {
        handleSubmit,
        register,
        formState: {
            errors,
            isValid,
        }
    } = useForm<IFormProps>()

    const customHandler = (formDataProps: IFormProps) => {
        console.log(formDataProps)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <input type="text" {...register('username', {
                    required: true,
                    pattern: {
                        value: /^[a-zA-Z0-9]([a-zA-Z0-9_-]){1,14}[a-zA-Z0-9]$/,
                        message: 'wrong username'
                    }
                })} />
                <input type="text" {...register('password', {
                    required: true,
                    pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message: 'wrong password'
                    }
                })} />
                <input type="number" {...register('age', {
                    min: {
                        value: 0,
                        message: 'вік не може бути менше 0'
                    },
                    max: {
                        value: 200,
                        message: 'вік не може бути більше 200'
                    },
                })} />
                <button>send</button>
            </form>
        </div>
    );
};

export default Form;