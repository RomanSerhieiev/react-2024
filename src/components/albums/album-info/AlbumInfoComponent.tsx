import React, { FC } from 'react';
import css from '../../styles/ItemInfoComponent.module.css';
import { IUser } from '../../../interfaces/user.interface';
import { IAlbum } from '../../../interfaces/album.interface';
import { IPhoto } from '../../../interfaces/photo.interface';
import { useNavigate } from 'react-router-dom';
import { EKey } from '../../../enums/local-storage-keys.enum';
import { navigateHelper } from '../../../helpers/navigate.helper';
import { useAppContext } from '../../../hooks/useAppContext';

interface IProps {
    user: IUser,
    album: IAlbum,
    photos: IPhoto[]
}

const AlbumInfoComponent: FC<IProps> = ({user, album, photos}) => {
    const {
        userSlice: {setSelectedUser},
        photoSlice: {setSelectedPhoto},
    } = useAppContext();

    const navigate = useNavigate();

    return (
        <div className={css.Container}>
            <h2>{album.id}. {album.title}</h2>
            <div className={css.MainContainer}>
                <div>USER: <button onClick={() => navigateHelper(EKey.selectedUser, user.id, '/users', setSelectedUser, navigate)}>{user.name}</button></div>
            </div>
            <h3>{album.title}'s photos</h3>
            <div className={css.ItemsContainer}>
                {photos.map(photo => (
                    <div className={css.ItemContainer} key={photo.id}>
                        <h4>{photo.id}. {photo.title}</h4>
                        <button onClick={() => navigateHelper(EKey.selectedPhoto, photo.id, '/photos', setSelectedPhoto, navigate)}>INFO</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AlbumInfoComponent;