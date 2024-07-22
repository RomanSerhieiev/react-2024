import React, { FC } from 'react';
import css from './PhotoInfoComponent.module.css'
import { IPhoto } from '../../../interfaces/photo.interface';
import { IAlbum } from '../../../interfaces/album.interface';
import { useNavigate } from 'react-router-dom';

interface IProps {
    photo: IPhoto
    album: IAlbum
}

const PhotoInfoComponent: FC<IProps> = ({photo, album}) => {
    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate(`/albums/${album.id}`, {state: {album}})
    }

    return (
        <div className={css.Container}>
            <h3>{photo.id}. {photo.title}</h3>
            <img src={photo.url} alt={photo.title} />
            <p>ALBUM: <button onClick={navigateHandler}>{album.title}</button></p>
        </div>
    );
};

export default PhotoInfoComponent;