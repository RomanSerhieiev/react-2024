import React, { FC } from 'react';
import css from '../../styles/ItemsComponent.module.css';
import AlbumComponent from '../album/AlbumComponent';
import { useAppContext } from '../../../hooks/useAppContext';

const AlbumsComponent: FC = () => {
    const {
        albumSlice: {albums, albumsPage}
    } = useAppContext();

    return (
        <div className={css.Container}>
            {albums.length && albums[albumsPage - 1].map(album => <AlbumComponent key={album.id} album={album} />)}
        </div>
    );
};

export default AlbumsComponent;