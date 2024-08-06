import React, { FC, useEffect } from 'react';
import css from '../../styles/ItemInfoPage.module.css';
import { useParams } from 'react-router-dom';
import PhotoInfoComponent from '../../../components/photos/photo-info/PhotoInfoComponent';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { photoActions } from '../../../store/slices/photo.slice';

const PhotoInfoPage: FC = () => {
    const dispatch = useAppDispatch();
    const {photoId = '1'} = useParams();

    useEffect(() => {
        dispatch(photoActions.getById(photoId));
    }, [photoId]);

    return (
        <div className={css.Container}>
            <PhotoInfoComponent />
        </div>
    );
};

export default PhotoInfoPage;