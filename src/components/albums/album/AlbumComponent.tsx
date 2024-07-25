import React, { FC } from 'react';
import css from './AlbumComponent.module.css';
import { IAlbum } from '../../../interfaces/album.interface';
import { useAppNavigate } from '../../../hooks/useAppNavigate';

interface IProps {
    album: IAlbum
}

const AlbumComponent: FC<IProps> = ({album}) => {
    const navigateHandler = useAppNavigate()

    return (
        <div className={css.Container}>
            <h3>{album.id}. {album.title.slice(0, 8)}</h3>
            <button onClick={() => navigateHandler<IAlbum>(`${album.id}`, album)}>INFO</button>
        </div>
    );
};

export default AlbumComponent;