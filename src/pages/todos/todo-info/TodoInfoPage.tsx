import React, { FC, useEffect } from 'react';
import css from '../../styles/ItemInfoPage.module.css';
import { useParams } from 'react-router-dom';
import TodoInfoComponent from '../../../components/todos/todo-info/TodoInfoComponent';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { todoActions } from '../../../store/slices/todo.slice';

const TodoInfoPage: FC = () => {
    const dispatch = useAppDispatch();
    const {todoId = '1'} = useParams();

    useEffect(() => {
        dispatch(todoActions.getById(todoId));
    }, [todoId]);

    return (
        <div className={css.Container}>
            <TodoInfoComponent />
        </div>
    );
};

export default TodoInfoPage;