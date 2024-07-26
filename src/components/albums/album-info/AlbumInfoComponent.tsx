import React, { FC } from 'react';
import css from './AlbumInfoComponent.module.css';
import { IAlbum } from '../../../interfaces/album.interface';
import { IUser } from '../../../interfaces/user.interface';
import { IPhoto } from '../../../interfaces/photo.interface';
import { useAppNavigate } from '../../../hooks/useAppNavigate';

interface IProps {
    album: IAlbum,
    user: IUser,
    photos: IPhoto[]
}

const AlbumInfoComponent: FC<IProps> = ({album, user, photos}) => {
    const navigateHandler = useAppNavigate()

    return (
        <div className={css.Container}>
            <h3>{album.id}. {album.title}</h3>
            <div>USER: <button onClick={() => navigateHandler<IUser>(`/users/${user.id}`, user)}>{user.name}</button></div>
            <button onClick={() => navigateHandler<IPhoto[]>(`photos`, photos)}>PHOTOS</button>
        </div>
    );
};

export default AlbumInfoComponent;