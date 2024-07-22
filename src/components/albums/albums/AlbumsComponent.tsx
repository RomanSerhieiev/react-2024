import React, { FC } from 'react';
import css from './AlbumsComponent.module.css'
import AlbumComponent from '../album/AlbumComponent';
import { IAlbum } from '../../../interfaces/album.interface';

interface IProps {
    albums: IAlbum[]
}

const AlbumsComponent: FC<IProps> = ({albums}) => {
    return (
        <div className={css.Container}>
            {albums.map(album => <AlbumComponent key={album.id} album={album} />)}
        </div>
    );
};

export default AlbumsComponent;