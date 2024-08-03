import React, { FC } from 'react';
import css from '../../styles/ItemInfoComponent.module.css';
import { IAlbum } from '../../../interfaces/album.interface';
import { IPhoto } from '../../../interfaces/photo.interface';
import { useNavigate } from 'react-router-dom';
import { EKey } from '../../../enums/local-storage-keys.enum';
import { navigateHelper } from '../../../helpers/navigate.helper';
import { useAppContext } from '../../../hooks/useAppContext';

interface IProps {
    album: IAlbum,
    photo: IPhoto
}

const PhotoInfoComponent: FC<IProps> = ({album, photo}) => {
    const {
        albumSlice: {setSelectedAlbum},
    } = useAppContext();

    const navigate = useNavigate();

    return (
        <div className={css.Container}>
            <div className={css.MainContainer}>
                <h2>{photo.id}. {photo.title}</h2>
                <img src={photo.url} alt={photo.title} />
                <p>ALBUM: <button onClick={() => navigateHelper(EKey.selectedAlbum, album.id, `/albums`, setSelectedAlbum, navigate)}>{album.title}</button></p>
            </div>
        </div>
    );
};

export default PhotoInfoComponent;