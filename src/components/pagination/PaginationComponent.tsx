import React, { FC } from 'react';
import css from './PaginationComponent.module.css';
import { useSearchParams } from 'react-router-dom';

interface IProps {
    pages: number,
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
            {page > 2 && <button className={css.Item1} value={1} onClick={() => pageHandler('1')}>{'<<'}</button>}
            {page > 1 && <button className={css.Item2} value={page - 1} onClick={() => pageHandler((page - 1).toString())}>{'<'}</button>}
            <div className={css.Item3}>{page}</div>
            {page < pages && <button className={css.Item4} value={page + 1} onClick={() => pageHandler((page + 1).toString())}>{'>'}</button>}
            {page < pages - 1 && <button className={css.Item5} value={pages} onClick={() => pageHandler(pages.toString())}>{'>>'}</button>}
        </div>
    );
};

export default PaginationComponent;