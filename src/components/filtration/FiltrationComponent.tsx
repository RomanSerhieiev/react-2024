import React, { ChangeEvent, FC } from 'react';
import css from './FiltrationComponent.module.css';
import { localStorageSave } from '../../helpers/local-storage-save.helper';
import { EKey } from '../../enums/local-storage-keys.enum';
import { retrieveLocalStorageData } from '../../helpers/retrieve-local-storage-data.helper';

interface IProps {
    pageSize: number,
    enumKey: EKey,
    setPageSize: (page: number) => void
}

const FiltrationComponent: FC<IProps> = ({pageSize, enumKey, setPageSize}) => {
    const handlePageSize = (pageSize: ChangeEvent<HTMLSelectElement>) => {
        localStorageSave<number>(enumKey, +pageSize.target.value);
        setPageSize(retrieveLocalStorageData<number>(enumKey));
    };

    return (
        <form className={css.Container}>
            <label>Display on page: {}
                <select value={pageSize} onChange={handlePageSize}>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={75}>75</option>
                    <option value={100}>100</option>
                </select>
            </label>
        </form>
    );
};

export default FiltrationComponent;