import React, { FC } from 'react';
import css from '../../styles/ItemsPage.module.css';
import AlbumsComponent from '../../../components/albums/albums/AlbumsComponent';
import FiltrationComponent from '../../../components/filtration/FiltrationComponent';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import { EKey } from '../../../enums/local-storage-keys.enum';
import { useAppContext } from '../../../hooks/useAppContext';

const AlbumsPage: FC = () => {
    const {
        albumSlice: {
            albumsPageSize,
            setAlbumsPageSize,
            albums,
            albumsPage,
            setAlbumsPage
        }
    } = useAppContext();

    return (
        <div className={css.Container}>
            <div>
                <h1>ALBUMS</h1>
                <FiltrationComponent pageSize={albumsPageSize} enumKey={EKey.albumsPageSize} setPageSize={setAlbumsPageSize} />
                <AlbumsComponent />
            </div>
            <PaginationComponent enumKey={EKey.albumsPage} page={albumsPage} pages={albums.length} setPage={setAlbumsPage} />
        </div>
    );
};

export default AlbumsPage;