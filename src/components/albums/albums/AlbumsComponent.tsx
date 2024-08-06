import React, { FC, useEffect } from 'react';
import css from '../../styles/ItemsComponent.module.css';
import AlbumComponent from '../album/AlbumComponent';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useSearchParams } from 'react-router-dom';

const AlbumsComponent: FC = () => {
    const albums = useAppSelector(state => state.albumSlice.albums);
    const [params] = useSearchParams({
        page: '1',
        skip: '25'
    });
    const pageParam = params.get('page');
    const page = pageParam ? +pageParam : 1;
    const skipParam = params.get('skip');
    const skip = skipParam ? +skipParam : 25;

    return (
        <div className={css.Container}>
            {albums.slice((page - 1) * skip, (page - 1) * skip + skip).map(album => <AlbumComponent key={album.id} album={album} />)}
        </div>
    );
};

export default AlbumsComponent;