import React, { FC, useEffect, useState } from 'react';
import css from './TodosPage.module.css';
import TodosComponent from '../../../components/todos/todos/TodosComponent';
import { useAppLocation } from '../../../hooks/useAppLocation';
import { ITodo } from '../../../interfaces/todo.interface';
import { todoService } from '../../../services/todo.service';
import { useParams } from 'react-router-dom';

const TodosPage: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    const { state } = useAppLocation<{ todos: ITodo[] } | null>()
    const { userId } = useParams()

    useEffect(() => {
        if (state) {
            setTodos(state.todos)
        } else if (userId) {
            todoService.getByUser(userId)
                .then(value => {
                    setTodos(value.data)
                })
        } else {
            todoService.getAll()
                .then(value => {
                    setTodos(value.data)
                })
        }
    }, [state]);

    return (
        <div className={css.Container}>
            <h2>TODOS</h2>
            <TodosComponent todos={todos} />
        </div>
    );
};

export default TodosPage;