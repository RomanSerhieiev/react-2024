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
    } = useForm<IFormProps>({
        mode: 'all'
    });

    const customHandler = (formDataProps: IFormProps) => {
        console.log(formDataProps);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <label>
                    <input type="text" {...register('username', {
                        required: {
                            value: true,
                            message: 'username is required'
                        },
                        pattern: {
                            value: /^[a-zA-Z0-9]([a-zA-Z0-9_-]){1,14}[a-zA-Z0-9]$/,
                            message: 'wrong username'
                        }
                    })} />
                    {errors.username && <div>{errors.username.message}</div>}
                </label>
                <label>
                    <input type="text" {...register('password', {
                        required: {
                            value: true,
                            message: 'password is required'
                        },
                        pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/,
                            message: 'wrong password'
                        }
                    })} />
                    {errors.password && <div>{errors.password.message}</div>}
                </label>
                <label>
                    <input {...register('age', {
                        valueAsNumber: true,
                        min: {
                            value: 0,
                            message: 'age can\'t be less than 0'
                        },
                        max: {
                            value: 200,
                            message: 'age can\'t be greater than 0'
                        },
                    })} />
                    {errors.age && <div>{errors.age.message}</div>}
                </label>
                <button disabled={!isValid}>send</button>
            </form>
        </div>
    );
};

export default Form;