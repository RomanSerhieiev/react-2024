import React, { FC } from 'react';
import css from './PaginationComponent.module.css';
import { useSearchParams } from 'react-router-dom';

interface IProps {
    pages: number
}

const PaginationComponent: FC<IProps> = ({pages}) => {
    const [params, setParams] = useSearchParams({
        page: '1',
        skip: '25'
    })

    const pageHandler = (page: string) => {
        const currentParams = Object.fromEntries(params.entries());
        setParams({...currentParams, page})
    }

    const pageParam = params.get('page');
    const page = pageParam ? +pageParam : 1;

    return (
        <div className={css.Container}>
            <button disabled={page <= 1} onClick={() => pageHandler('1')}>FIRST</button>
            <button disabled={page <= 1} onClick={() => pageHandler((page - 1).toString())}>PREV</button>
            <span>{params.get('page')}</span>
            <button disabled={page >= pages} onClick={() => pageHandler((page + 1).toString())}>NEXT</button>
            <button disabled={page >= pages} onClick={() => pageHandler(pages.toString())}>LAST</button>
        </div>
    );
};

export default PaginationComponent;