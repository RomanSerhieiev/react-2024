import React, { FC } from 'react';
import css from './TodoInfoComponent.module.css';
import { ITodo } from '../../../interfaces/todo.interface';
import { IUser } from '../../../interfaces/user.interface';
import { useAppNavigate } from '../../../hooks/useAppNavigate';

interface IProps {
    todo: ITodo
    user: IUser
}

const TodoInfoComponent: FC<IProps> = ({todo, user}) => {
    const navigateHandler = useAppNavigate()

    return (
        <div className={css.Container}>
            <h3>{todo?.id}. {todo?.title}</h3>
            <p>COMPLETED: <span className={css.Completed}>{`${todo?.completed}`}</span></p>
            <div>USER: <button onClick={() => navigateHandler<IUser>(`/users/${user?.id}`, user)}>{user?.name}</button></div>
        </div>
    );
};

export default TodoInfoComponent;