import React, { FC } from 'react';
import css from './TodosComponent.module.css';
import TodoComponent from '../todo/TodoComponent';
import { useStore } from '../../../store/store';

const TodosComponent: FC = () => {
    const {todoSlice: {todos, todosPage}} = useStore()

    return (
        <div className={css.Container}>
            {todos.length && todos[todosPage - 1].map(todo => <TodoComponent key={todo.id} todo={todo} />)}
        </div>
    );
};

export default TodosComponent;