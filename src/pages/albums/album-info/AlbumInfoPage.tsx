import React, { FC } from 'react';
import css from './AlbumInfoPage.module.css';
import { useStore } from '../../../store/store';
import { useParams } from 'react-router-dom';
import AlbumInfoComponent from '../../../components/albums/album-info/AlbumInfoComponent';

const AlbumInfoPage: FC = () => {
    const {
        userSlice: {users},
        albumSlice: {albums},
        photoSlice: {photos}
    } = useStore()

    const { albumId = '1' } = useParams()

    const album = albums.flat().find(album => album.id === +albumId);
    const user = users.flat().find(user => album?.userId === user.id)
    const albumPhotos = photos.flat().filter(photo => album?.photosIds.includes(photo.id));

    return (
        <div className={css.Container}>
            {user && album && albumPhotos && <AlbumInfoComponent user={user} album={album} photos={albumPhotos} />}
        </div>
    );
};

export default AlbumInfoPage;