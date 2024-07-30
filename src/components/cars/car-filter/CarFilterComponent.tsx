import React, { FC } from 'react';
import css from './CarFilterComponent.module.css'
import { ICars } from '../../../interfaces/cars.interface';
import { localStorageSave } from '../../../helpers/local-storage-save.helper';
import { IPageSize } from '../../../interfaces/page-size.interface';
import { EKey } from '../../../enums/local-storage-keys.enum';
import { retrieveLocalStorageData } from '../../../helpers/retrieve-local-storage-data.helper';

interface IProps {
    cars: ICars,
    setTrigger: (trigger: boolean) => void
}

const CarFilterComponent: FC<IProps> = ({cars, setTrigger}) => {
    const changeSize = (event: React.ChangeEvent<HTMLInputElement>) => {
        localStorageSave<IPageSize>(EKey.pageSize, {pageSize: +event.target.value})
        setTrigger(true)
    }

    return (
        <div className={css.Container}>
            <div>Display on page:</div>
            <input onChange={changeSize} type={'range'} min={1} max={cars.total_items} value={retrieveLocalStorageData<IPageSize>(EKey.pageSize).pageSize} />
            <div>{retrieveLocalStorageData<IPageSize>(EKey.pageSize).pageSize}</div>
        </div>
    );
};

export default CarFilterComponent;