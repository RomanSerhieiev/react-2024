import React, { FC } from 'react';
import { IUser } from '../../interfaces/user.interface';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { todoValidator } from '../../validators/todo.validator';
import { todoService } from '../../services/todo.service';

interface IProps {
    users: IUser[];
}

interface IInputs {
    userId: number;
    title: string;
    completed: boolean;
}

const Todo: FC<IProps> = ({users}) => {
    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isValid
        }
    } = useForm<IInputs>({
        mode: 'all',
        resolver: joiResolver(todoValidator)
    });

    const submitHandler = async (todo: IInputs) => {
        await todoService.create(todo);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>User</label>
                    <select {...register("userId")}>
                        {users.map(user => (
                            <option key={user.id} value={user.id}>{user.name}</option>
                        ))}
                    </select>
                    {errors.userId && <span>{errors.userId.message}</span>}
                </div>
                <div>
                    <label>Title</label>
                    <input type="text" {...register("title")} />
                    {errors.title && <span>{errors.title.message}</span>}
                </div>
                <div>
                    <label>Completed</label>
                    <input type="checkbox" {...register("completed")} />
                    {errors.completed && <span>{errors.completed.message}</span>}
                </div>
                <button disabled={!isValid} type="submit">Create Todo</button>
            </form>
        </div>
    );
};

export default Todo;