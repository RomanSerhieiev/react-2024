import React, { FC } from 'react';
import css from './TodoComponent.module.css'
import { ITodo } from '../../../interfaces/todo.interface';
import { useNavigate } from 'react-router-dom';

interface IProps {
    todo: ITodo
}

const TodoComponent: FC<IProps> = ({todo}) => {
    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate(`${todo.id}`, {state: {todo}})
    }

    return (
        <div className={css.Container}>
            <h3>{todo.id}. {todo.title.slice(0, 8)}</h3>
            <button onClick={navigateHandler}>INFO</button>
        </div>
    );
};

export default TodoComponent;