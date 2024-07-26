import React, { FC, useEffect, useState } from 'react';
import css from './TodosPage.module.css';
import TodosComponent from '../../../components/todos/todos/TodosComponent';
import { useAppLocation } from '../../../hooks/useAppLocation';
import { ITodo } from '../../../interfaces/todo.interface';
import { todoService } from '../../../services/todo.service';
import { useParams, useSearchParams } from 'react-router-dom';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import FiltrationComponent from '../../../components/filtration/FiltrationComponent';

const TodosPage: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [filteredTodos, setFilteredTodos] = useState<ITodo[]>([]);
    const [pages, setPages] = useState<number>(1);
    const [params] = useSearchParams({page: '1'});
    const {state} = useAppLocation<ITodo[] | null>();
    const {userId} = useParams();

    useEffect(() => {
        if (state) {
            setTodos(state);
        } else if (userId) {
            todoService.getByUser(userId)
                .then(({data}) => {
                    setTodos(data);
                });
        } else {
            todoService.getAll()
                .then(({data}) => {
                    setTodos(data);
                });
        }
    }, [state, userId]);

    useEffect(() => {
        const pageParam = params.get('page');
        const page = pageParam ? +pageParam : 1;
        const skipParam = params.get('skip');
        const skip = skipParam ? +skipParam : 25;

        setFilteredTodos(todos.slice((page - 1) * skip, (page - 1) * skip + skip));

        if (todos.length % skip === 0) {
            setPages(todos.length / skip)
        } else {
            setPages(Math.floor(todos.length / skip) + 1)
        }
    }, [params, todos]);

    return (
        <div className={css.Container}>
            <div>
                <h2>TODOS</h2>
                <FiltrationComponent items={todos.length} />
                <TodosComponent todos={filteredTodos} />
            </div>
            <PaginationComponent pages={pages} />
        </div>
    );
};

export default TodosPage;