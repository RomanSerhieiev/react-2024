import React, { FC } from 'react';
import css from './AlbumInfoComponent.module.css';
import { IUser } from '../../../interfaces/user.interface';
import { IAlbum } from '../../../interfaces/album.interface';
import { IPhoto } from '../../../interfaces/photo.interface';
import { useNavigate } from 'react-router-dom';
import { localStorageSave } from '../../../helpers/local-storage-save.helper';
import { EKey } from '../../../enums/local-storage-keys.enum';
import { retrieveLocalStorageData } from '../../../helpers/retrieve-local-storage-data.helper';
import { useStore } from '../../../store/store';

interface IProps {
    user: IUser,
    album: IAlbum,
    photos: IPhoto[]
}

const AlbumInfoComponent: FC<IProps> = ({user, album, photos}) => {
    const {
        userSlice: {setSelectedUser},
        photoSlice: {setSelectedPhoto},
    } = useStore()

    const navigate = useNavigate();

    const handleNavigate = (
        key: EKey,
        id: number,
        endpoint: string,
        setter: (retriever: number) => void,

    ) => {
        localStorageSave<number>(key, id);
        setter(retrieveLocalStorageData<number>(key));
        navigate(`${endpoint}/${id}`);
    };

    return (
        <div className={css.Container}>
            <h2>{album.id}. {album.title}</h2>
            <div className={css.AlbumContainer}>
                <div>USER: <button onClick={() => handleNavigate(EKey.selectedUser, user.id, '/users', setSelectedUser)}>{user.name}</button></div>
            </div>
            <h3>{album.title}'s photos</h3>
            <div className={css.PhotosContainer}>
                {photos.map(photo => (
                    <div className={css.PhotoContainer} key={photo.id}>
                        <h4>{photo.id}. {photo.title}</h4>
                        <button onClick={() => handleNavigate(EKey.selectedPhoto, photo.id, '/photos', setSelectedPhoto)}>INFO</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AlbumInfoComponent;