import React, { FC, useEffect, useState } from 'react';
import css from './TodoInfoPage.module.css';
import TodoInfoComponent from '../../../components/todos/todo-info/TodoInfoComponent';
import { useParams } from 'react-router-dom';
import { useAppLocation } from '../../../hooks/useAppLocation';
import { ITodo } from '../../../interfaces/todo.interface';
import { IUser } from '../../../interfaces/user.interface';
import { todoService } from '../../../services/todo.service';
import { userService } from '../../../services/user.service';

const TodoInfoPage: FC = () => {
    const [todo, setTodo] = useState<ITodo | null>(null);
    const [user, setUser] = useState<IUser | null>(null);
    const {todoId} = useParams();
    const {state} = useAppLocation<{ todo: ITodo }>();

    useEffect(() => {
        if (state) {
            setTodo(state.todo);
        } else if (todoId) {
            todoService.getById(todoId)
                .then(value => {
                    setTodo(value.data);
                });
        } else {
            throw new Error(`Couldn't find todo with id ${todoId}`);
        }
    }, [todoId, state]);

    useEffect(() => {
        if (todo) {
            userService.getById(`${todo.userId}`)
                .then(value => {
                    setUser(value.data);
                });
        }
    }, [todo]);

    return (
        <div className={css.Container}>
            {todo && user && <TodoInfoComponent todo={todo} user={user} />}
        </div>
    );
};

export default TodoInfoPage;