import React, { FC } from 'react';
import css from './AlbumInfoComponent.module.css'
import { IAlbum } from '../../../interfaces/album.interface';
import { IUser } from '../../../interfaces/user.interface';
import { IPhoto } from '../../../interfaces/photo.interface';
import { useNavigate } from 'react-router-dom';

interface IProps {
    album: IAlbum,
    user: IUser,
    photos: IPhoto[]
}

const AlbumInfoComponent: FC<IProps> = ({album, user, photos}) => {
    const navigate = useNavigate();

    const photosNavigateHandler = () => {
        navigate(`photos`, {state: {photos}})
    }

    const userNavigateHandler = () => {
        navigate(`/users/${user.id}`, {state: {user}})
    }

    return (
        <div className={css.Container}>
            <h3>{album.id}. {album.title}</h3>
            <div>USER: <button onClick={userNavigateHandler}>{user.name}</button></div>
            <button onClick={photosNavigateHandler}>PHOTOS</button>
        </div>
    );
};

export default AlbumInfoComponent;