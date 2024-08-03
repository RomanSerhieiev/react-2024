import React, { FC } from 'react';
import css from '../../styles/ItemsComponent.module.css';
import PhotoComponent from '../photo/PhotoComponent';
import { useAppContext } from '../../../hooks/useAppContext';

const PhotosComponent: FC = () => {
    const {
        photoSlice: {photos, photosPage}
    } = useAppContext();

    return (
        <div className={css.Container}>
            {photos.length && photos[photosPage - 1].map(photo => <PhotoComponent key={photo.id} photo={photo} />)}
        </div>
    );
};

export default PhotosComponent;