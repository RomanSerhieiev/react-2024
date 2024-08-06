import React, { FC } from 'react';
import css from '../../styles/ItemInfoComponent.module.css';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/useAppSelector';

const TodoInfoComponent: FC = () => {
    const todo = useAppSelector(state => state.todoSlice.todo);

    const navigate = useNavigate();

    return (
        todo && <div className={css.Container}>
          <h3>{todo.id}. {todo.title}</h3>
          <p>COMPLETED: <span className={todo.completed ? css.True : css.False}>{`${todo.completed}`}</span></p>
          <button onClick={() => navigate(`/users/${todo.userId}`)}>USER</button>
        </div>
    );
};

export default TodoInfoComponent;