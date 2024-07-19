import React, { FC, FormEvent, useState } from 'react';

interface IForm {
    username: string,
    password: string,
}

const Form: FC = () => {
    const [formState, setFormState] = useState<IForm>({
        username: 'asd',
        password: 'qwe'
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        let user = {
            username: formState.username,
            password: formState.password
        }
        console.log(user);
    };

    const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
        const input = e.target as HTMLFormElement;
        setFormState({...formState, [input.name]: input.value})
    }

    // const handleUsernameChange = (e: FormEvent<HTMLInputElement>) => {
    //     const input = e.target as HTMLFormElement;
    //     setFormState({...formState, username: input.value})
    // }
    //
    // const handlePaswordChange = (e: FormEvent<HTMLInputElement>) => {
    //     const input = e.target as HTMLFormElement;
    //     setFormState({...formState, password: input.value})
    // }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name={'username'} placeholder={'Name'} value={formState.username} onChange={handleInputChange} />
                <input type="text" name={'password'} placeholder={'Password'} value={formState.password} onChange={handleInputChange} />
                <button>send</button>
            </form>
        </div>
    );
};

export default Form;