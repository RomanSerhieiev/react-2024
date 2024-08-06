import React, { FC } from 'react';
import css from '../../styles/ItemsComponent.module.css';
import TodoComponent from '../todo/TodoComponent';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useSearchParams } from 'react-router-dom';

const TodosComponent: FC = () => {
    const todos = useAppSelector(state => state.todoSlice.todos);
    const [params] = useSearchParams({
        page: '1',
        skip: '25'
    });
    const pageParam = params.get('page');
    const page = pageParam ? +pageParam : 1;
    const skipParam = params.get('skip');
    const skip = skipParam ? +skipParam : 25;

    return (
        <div className={css.Container}>
            {todos.slice((page - 1) * skip, (page - 1) * skip + skip).map(todo => <TodoComponent key={todo.id} todo={todo} />)}
        </div>
    );
};

export default TodosComponent;