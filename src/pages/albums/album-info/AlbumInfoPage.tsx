import React, { FC } from 'react';
import css from '../../styles/ItemInfoPage.module.css';
import { useParams } from 'react-router-dom';
import AlbumInfoComponent from '../../../components/albums/album-info/AlbumInfoComponent';
import { useAppContext } from '../../../hooks/useAppContext';

const AlbumInfoPage: FC = () => {
    const {
        userSlice: {users},
        albumSlice: {albums},
        photoSlice: {photos}
    } = useAppContext();

    const {albumId = '1'} = useParams();

    const album = albums.flat().find(album => album.id === +albumId);
    const user = users.flat().find(user => album?.userId === user.id);
    const albumPhotos = photos.flat().filter(photo => album?.photosIds.includes(photo.id));

    return (
        <div className={css.Container}>
            {album && user && photos && <AlbumInfoComponent album={album} user={user} photos={albumPhotos} />}
        </div>
    );
};

export default AlbumInfoPage;