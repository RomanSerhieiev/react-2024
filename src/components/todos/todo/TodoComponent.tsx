import React, { FC } from 'react';
import css from '../../styles/ItemComponent.module.css';
import { ITodo } from '../../../interfaces/todo.interface';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../../store/store';
import { navigateHelper } from '../../../helpers/navigate.helper';
import { EKey } from '../../../enums/local-storage-keys.enum';

interface IProps {
    todo: ITodo;
}

const TodoComponent: FC<IProps> = ({todo}) => {
    const {
        todoSlice: {setSelectedTodo}
    } = useStore();

    const navigate = useNavigate();

    return (
        <div className={css.Container}>
            <h3>{todo.id}. {todo.title.slice(0, 8)}</h3>
            <button onClick={() => navigateHelper(
                EKey.selectedTodo,
                todo.id,
                '/todos',
                setSelectedTodo,
                navigate
            )}>
                INFO
            </button>
        </div>
    );
};

export default TodoComponent;