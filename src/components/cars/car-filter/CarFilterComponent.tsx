import React, { FC } from 'react';
import css from './CarFilterComponent.module.css';
import { localStorageSave } from '../../../helpers/local-storage-save.helper';
import { IPageSize } from '../../../interfaces/page-size.interface';
import { EKey } from '../../../enums/local-storage-keys.enum';

interface IProps {
    pageSize: number,
    setTrigger: (trigger: boolean) => void
}

const CarFilterComponent: FC<IProps> = ({pageSize, setTrigger}) => {
    const changeSize = (event: React.ChangeEvent<HTMLSelectElement>) => {
        localStorageSave<IPageSize>(EKey.pageSize, {pageSize: +event.target.value});
        setTrigger(true);
    };

    return (
        <form className={css.Container}>
            <label>Display on page: {}
                <select value={pageSize} onChange={changeSize}>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={75}>75</option>
                    <option value={100}>100</option>
                </select>
            </label>
        </form>
    );
};

export default CarFilterComponent;