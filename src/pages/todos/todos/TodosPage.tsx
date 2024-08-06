import React, { FC, useEffect } from 'react';
import css from '../../styles/ItemsPage.module.css';
import TodosComponent from '../../../components/todos/todos/TodosComponent';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useParams, useSearchParams } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { albumActions } from '../../../store/slices/album.slice';
import { todoActions } from '../../../store/slices/todo.slice';
import FiltrationComponent from '../../../components/filtration/FiltrationComponent';

const TodosPage: FC = () => {
    const todos = useAppSelector(state => state.todoSlice.todos);
    const {userId} = useParams();
    const dispatch = useAppDispatch();
    const [params] = useSearchParams({
        page: '1',
        skip: '25'
    });

    const skipParam = params.get('skip');
    const skip = skipParam ? +skipParam : 25;
    const pages = todos.length % skip === 0 ? todos.length / skip : Math.floor(todos.length / skip) + 1

    useEffect(() => {
        if (userId) {
            dispatch(todoActions.getByUser(userId));
        } else {
            dispatch(todoActions.getAll());
        }
    }, [userId]);

    return (
        <div className={css.Container}>
            <div>
                <h1>TODOS</h1>
                <FiltrationComponent items={todos.length} />
                <TodosComponent />
            </div>
            <PaginationComponent pages={pages} />
        </div>
    );
};

export default TodosPage;