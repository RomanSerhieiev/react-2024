import React, { FC } from 'react';
import css from '../../styles/ItemInfoPage.module.css';
import { useStore } from '../../../store/store';
import { useParams } from 'react-router-dom';
import TodoInfoComponent from '../../../components/todos/todo-info/TodoInfoComponent';

const TodoInfoPage: FC = () => {
    const {
        todoSlice: {todos},
        userSlice: {users},
    } = useStore();

    const {todoId = '1'} = useParams();

    const todo = todos.flat().find(todo => todo.id === +todoId);
    const user = users.flat().find(user => todo?.userId === user.id);

    return (
        <div className={css.Container}>
            {todo && user && <TodoInfoComponent todo={todo} user={user} />}
        </div>
    );
};

export default TodoInfoPage;