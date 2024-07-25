import React, { FC } from 'react';
import css from './PhotoInfoComponent.module.css';
import { IPhoto } from '../../../interfaces/photo.interface';
import { IAlbum } from '../../../interfaces/album.interface';
import { useAppNavigate } from '../../../hooks/useAppNavigate';

interface IProps {
    photo: IPhoto
    album: IAlbum
}

const PhotoInfoComponent: FC<IProps> = ({photo, album}) => {
    const navigateHandler = useAppNavigate()

    return (
        <div className={css.Container}>
            <h3>{photo.id}. {photo.title}</h3>
            <img src={photo.url} alt={photo.title} />
            <p>ALBUM: <button onClick={() => navigateHandler<IAlbum>(`/albums/${album.id}`, album)}>{album.title}</button></p>
        </div>
    );
};

export default PhotoInfoComponent;