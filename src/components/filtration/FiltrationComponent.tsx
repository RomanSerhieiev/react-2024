import React, { FC } from 'react';
import css from './FiltrationComponent.module.css';
import { useSearchParams } from 'react-router-dom';

interface IProps {
    items: number
}

const FiltrationComponent: FC<IProps> = ({items}) => {
    const [params, setParams] = useSearchParams({
        page: '1',
        skip: '25'
    });

    const skipHandler = (skip: string) => {
        const currentParams = Object.fromEntries(params.entries());
        setParams({...currentParams, skip});
    };

    const skip = params.get('skip') || '25';

    return (
        <div className={css.Container}>
            <p>Display on the page by</p>
            <button disabled={skip === '25' || items < 25} onClick={() => skipHandler('25')}>25</button>
            <button disabled={skip === '50' || items < 50} onClick={() => skipHandler('50')}>50</button>
            <button disabled={skip === '75' || items < 75} onClick={() => skipHandler('75')}>75</button>
            <button disabled={skip === '100' || items < 100} onClick={() => skipHandler('100')}>100</button>
        </div>
    );
};

export default FiltrationComponent;