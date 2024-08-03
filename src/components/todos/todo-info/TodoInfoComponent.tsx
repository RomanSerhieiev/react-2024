import React, { FC } from 'react';
import css from '../../styles/ItemInfoComponent.module.css';
import { ITodo } from '../../../interfaces/todo.interface';
import { IUser } from '../../../interfaces/user.interface';
import { useNavigate } from 'react-router-dom';
import { navigateHelper } from '../../../helpers/navigate.helper';
import { EKey } from '../../../enums/local-storage-keys.enum';
import { useAppContext } from '../../../hooks/useAppContext';

interface IProps {
    todo: ITodo,
    user: IUser
}

const TodoInfoComponent: FC<IProps> = ({user, todo}) => {
    const {
        userSlice: {setSelectedUser},
    } = useAppContext();

    const navigate = useNavigate();

    return (
        <div className={css.Container}>
            <div className={css.MainContainer}>
                <h2>{todo.id}. {todo.title}</h2>
                <p>COMPLETED: <span className={todo.completed ? css.True : css.False}>{`${todo.completed}`}</span></p>
                <div>USER: <button onClick={() => navigateHelper(EKey.selectedUser, user.id, `/users`, setSelectedUser, navigate)}>{user.name}</button></div>
            </div>
        </div>
    );
};

export default TodoInfoComponent;