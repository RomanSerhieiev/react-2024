import React, { FC } from 'react';
import css from '../../styles/ItemsComponent.module.css';
import TodoComponent from '../todo/TodoComponent';
import { useAppContext } from '../../../hooks/useAppContext';

const TodosComponent: FC = () => {
    const {
        todoSlice: {todos, todosPage}
    } = useAppContext();

    return (
        <div className={css.Container}>
            {todos.length && todos[todosPage - 1].map(todo => <TodoComponent key={todo.id} todo={todo} />)}
        </div>
    );
};

export default TodosComponent;