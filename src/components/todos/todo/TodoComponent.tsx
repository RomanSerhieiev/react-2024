import React, { FC } from 'react';
import css from './TodoComponent.module.css'
import { ITodo } from '../../../interfaces/todo.interface';
import { useNavigate } from 'react-router-dom';

interface IProps {
    todo: ITodo
}

const TodoComponent: FC<IProps> = ({todo}) => {
    const navigate = useNavigate();

    return (
        <div className={css.Container}>
            <h3>{todo.id}. {todo.title.slice(0, 8)}</h3>
            <button onClick={() => navigate(`${todo.id}`)}>INFO</button>
        </div>
    );
};

export default TodoComponent;