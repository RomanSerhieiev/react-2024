import React, { FC } from 'react';
import css from './AlbumComponent.module.css';
import { IAlbum } from '../../../interfaces/album.interface';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../../store/store';
import { localStorageSave } from '../../../helpers/local-storage-save.helper';
import { EKey } from '../../../enums/local-storage-keys.enum';
import { retrieveLocalStorageData } from '../../../helpers/retrieve-local-storage-data.helper';

interface IProps {
    album: IAlbum
}

const AlbumComponent: FC<IProps> = ({album}) => {
    const {albumSlice: {setSelectedAlbum}} = useStore();

    const navigate = useNavigate();

    const handleClick = () => {
        localStorageSave<number>(EKey.selectedAlbum, album.id);
        setSelectedAlbum(retrieveLocalStorageData<number>(EKey.selectedAlbum));
        navigate(`${album.id}`);
    };

    return (
        <div className={css.Container}>
            <h3>{album.id}. {album.title}</h3>
            <button onClick={handleClick}>INFO</button>
        </div>
    );
};

export default AlbumComponent;