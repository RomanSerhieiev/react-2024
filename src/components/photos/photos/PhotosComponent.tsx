import React, { FC } from 'react';
import css from '../../styles/ItemsComponent.module.css';
import PhotoComponent from '../photo/PhotoComponent';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useSearchParams } from 'react-router-dom';

const PhotosComponent: FC = () => {
    const photos = useAppSelector(state => state.photoSlice.photos);
    const [params] = useSearchParams({
        page: '1',
        skip: '25'
    });
    const pageParam = params.get('page');
    const page = pageParam ? +pageParam : 1;
    const skipParam = params.get('skip');
    const skip = skipParam ? +skipParam : 25;

    return (
        <div className={css.Container}>
            {photos.slice((page - 1) * skip, (page - 1) * skip + skip).map(photo => <PhotoComponent key={photo.id} photo={photo} />)}
        </div>
    );
};

export default PhotosComponent;