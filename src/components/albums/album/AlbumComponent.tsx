import React, { FC } from 'react';
import css from '../../styles/ItemComponent.module.css';
import { IAlbum } from '../../../interfaces/album.interface';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../../store/store';
import { EKey } from '../../../enums/local-storage-keys.enum';
import { navigateHelper } from '../../../helpers/navigate.helper';

interface IProps {
    album: IAlbum;
}

const AlbumComponent: FC<IProps> = ({album}) => {
    const {
        albumSlice: {setSelectedAlbum}
    } = useStore();

    const navigate = useNavigate();

    return (
        <div className={css.Container}>
            <h3>{album.id}. {album.title}</h3>
            <button onClick={() => navigateHelper(
                EKey.selectedAlbum,
                album.id,
                '/albums',
                setSelectedAlbum,
                navigate
            )}>
                INFO
            </button>
        </div>
    );
};

export default AlbumComponent;