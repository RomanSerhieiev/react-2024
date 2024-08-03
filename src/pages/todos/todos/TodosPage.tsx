import React, { FC } from 'react';
import css from '../../styles/ItemsPage.module.css';
import FiltrationComponent from '../../../components/filtration/FiltrationComponent';
import TodosComponent from '../../../components/todos/todos/TodosComponent';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import { EKey } from '../../../enums/local-storage-keys.enum';
import { useAppContext } from '../../../hooks/useAppContext';

const TodosPage: FC = () => {
    const {
        todoSlice: {
            todosPageSize,
            setTodosPageSize,
            todos,
            todosPage,
            setTodosPage
        }
    } = useAppContext();

    return (
        <div className={css.Container}>
            <div>
                <h1>TODOS</h1>
                <FiltrationComponent pageSize={todosPageSize} enumKey={EKey.todosPageSize} setPageSize={setTodosPageSize} />
                <TodosComponent />
            </div>
            <PaginationComponent enumKey={EKey.todosPage} page={todosPage} pages={todos.length} setPage={setTodosPage} />
        </div>
    );
};

export default TodosPage;