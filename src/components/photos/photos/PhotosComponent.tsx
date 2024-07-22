import React, { FC } from 'react';
import css from './PhotosComponent.module.css';
import PhotoComponent from '../photo/PhotoComponent';
import { IPhoto } from '../../../interfaces/photo.interface';

interface IProps {
    photos: IPhoto[]
}

const PhotosComponent: FC<IProps> = ({photos}) => {
    return (
        <div className={css.Container}>
            {photos.map(photo => <PhotoComponent key={photo.id} photo={photo} />)}
        </div>
    );
};

export default PhotosComponent;