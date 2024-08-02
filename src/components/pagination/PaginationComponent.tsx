import React, { FC, MouseEvent } from 'react';
import css from './PaginationComponent.module.css';
import { localStorageSave } from '../../helpers/local-storage-save.helper';
import { EKey } from '../../enums/local-storage-keys.enum';
import { retrieveLocalStorageData } from '../../helpers/retrieve-local-storage-data.helper';

interface IProps {
    page: number,
    pages: number,
    enumKey: EKey,
    setPage: (page: number) => void
}

const PaginationComponent: FC<IProps> = ({page, pages, enumKey, setPage}) => {
    const handlePage = (page: MouseEvent<HTMLButtonElement>) => {
        localStorageSave<number>(enumKey, +page.currentTarget.value);
        setPage(retrieveLocalStorageData<number>(enumKey));
    };

    return (
        <div className={css.Container}>
            {page > 2 && <button className={css.Item1} value={1} onClick={handlePage}>{'<<'}</button>}
            {page > 1 && <button className={css.Item2} value={page - 1} onClick={handlePage}>{'<'}</button>}
            <span className={css.Item3}>{page}</span>
            {page < pages && <button className={css.Item4} value={page + 1} onClick={handlePage}>{'>'}</button>}
            {page < pages - 1 && <button className={css.Item5} value={pages} onClick={handlePage}>{'>>'}</button>}
        </div>
    );
};

export default PaginationComponent;