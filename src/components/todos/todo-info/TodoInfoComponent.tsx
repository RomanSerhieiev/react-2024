import React, { FC } from 'react';
import css from './TodoInfoComponent.module.css';
import { ITodo } from '../../../interfaces/todo.interface';
import { IUser } from '../../../interfaces/user.interface';
import { useNavigate } from 'react-router-dom';

interface IProps {
    todo: ITodo | null
    user: IUser | null
}

const TodoInfoComponent: FC<IProps> = ({todo, user}) => {
    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate(`/users/${user?.id}`, {state: {user}})
    }

    return (
        <div className={css.Container}>
            <h3>{todo?.id}. {todo?.title}</h3>
            <p>COMPLETED: <span className={css.Completed}>{`${todo?.completed}`}</span></p>
            <div>USER: <button onClick={navigateHandler}>{user?.name}</button></div>
        </div>
    );
};

export default TodoInfoComponent;