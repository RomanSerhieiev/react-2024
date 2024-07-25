import React, { FC } from 'react';
import css from './TodoComponent.module.css';
import { ITodo } from '../../../interfaces/todo.interface';
import { useAppNavigate } from '../../../hooks/useAppNavigate';

interface IProps {
    todo: ITodo
}

const TodoComponent: FC<IProps> = ({todo}) => {
    const navigateHandler = useAppNavigate()

    return (
        <div className={css.Container}>
            <h3>{todo.id}. {todo.title.slice(0, 8)}</h3>
            <button onClick={() => navigateHandler<ITodo>(`${todo.id}`, todo)}>INFO</button>
        </div>
    );
};

export default TodoComponent;