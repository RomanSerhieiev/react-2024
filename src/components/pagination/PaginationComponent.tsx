import React, { FC } from 'react';
import css from './PaginationComponent.module.css'
import { useSearchParams } from 'react-router-dom';

interface IProps {
    next: {
        page: string
    } | null,
    prev: {
        page: string
    } | null
}

const PaginationComponent: FC<IProps> = ({next, prev}) => {
    const [params, setParams] = useSearchParams({page: '1'})

    const changePage = (page: string) => {
        switch (page) {
            case 'next':
                setParams({...next});
                break;
            case 'prev':
                setParams({...prev});
                break;
        }
    }

    return (
        <div className={css.Container}>
            <button disabled={!prev} onClick={() => changePage('prev')}>prev</button>
            <span>{params.get('page')}</span>
            <button disabled={!next} onClick={() => changePage('next')}>next</button>
        </div>
    );
};

export default PaginationComponent;