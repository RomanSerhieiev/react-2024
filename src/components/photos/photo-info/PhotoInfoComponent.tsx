import React, { FC } from 'react';
import css from '../../styles/ItemInfoComponent.module.css';
import { IAlbum } from '../../../interfaces/album.interface';
import { IPhoto } from '../../../interfaces/photo.interface';
import { useStore } from '../../../store/store';
import { useNavigate } from 'react-router-dom';
import { EKey } from '../../../enums/local-storage-keys.enum';
import { navigateHelper } from '../../../helpers/navigate.helper';

interface IProps {
    album: IAlbum,
    photo: IPhoto
}

const PhotoInfoComponent: FC<IProps> = ({album, photo}) => {
    const {
        albumSlice: {setSelectedAlbum},
    } = useStore();

    const navigate = useNavigate();

    return (
        <div className={css.MainContainer}>
            <h3>{photo.id}. {photo.title}</h3>
            <img src={photo.url} alt={photo.title} />
            <p>ALBUM: <button onClick={() => navigateHelper(EKey.selectedAlbum, album.id, `/albums`, setSelectedAlbum, navigate)}>{album.title}</button></p>
        </div>
    );
};

export default PhotoInfoComponent;