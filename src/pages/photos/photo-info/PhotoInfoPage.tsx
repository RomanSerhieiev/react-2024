import React, { FC } from 'react';
import css from '../../styles/ItemInfoPage.module.css';
import { useStore } from '../../../store/store';
import { useParams } from 'react-router-dom';
import PhotoInfoComponent from '../../../components/photos/photo-info/PhotoInfoComponent';

const PhotoInfoPage: FC = () => {
    const {
        albumSlice: {albums},
        photoSlice: {photos}
    } = useStore();

    const {photoId = '1'} = useParams();

    const photo = photos.flat().find(photo => photo.id === +photoId);
    const album = albums.flat().find(album => photo?.albumId === album.id);

    return (
        <div className={css.Container}>
            {photo && album && <PhotoInfoComponent photo={photo} album={album} />}
        </div>
    );
};

export default PhotoInfoPage;