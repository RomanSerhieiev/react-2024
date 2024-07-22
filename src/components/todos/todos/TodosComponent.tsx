import React, { FC } from 'react';
import css from './TodosComponent.module.css';
import TodoComponent from '../todo/TodoComponent';
import { ITodo } from '../../../interfaces/todo.interface';

interface IProps {
    todos: ITodo[]
}

const TodosComponent: FC<IProps> = ({todos}) => {
    return (
        <div className={css.Container}>
            {todos.map(todo => <TodoComponent key={todo.id} todo={todo} />)}
        </div>
    );
};

export default TodosComponent;