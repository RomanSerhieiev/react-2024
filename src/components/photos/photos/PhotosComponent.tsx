import React, { FC } from 'react';
import css from './PhotosComponent.module.css';
import PhotoComponent from '../photo/PhotoComponent';
import { useStore } from '../../../store/store';

const PhotosComponent: FC = () => {
    const {photoSlice: {photos, photosPage}} = useStore()

    return (
        <div className={css.Container}>
            {photos.length && photos[photosPage - 1].map(photo => <PhotoComponent key={photo.id} photo={photo} />)}
        </div>
    );
};

export default PhotosComponent;