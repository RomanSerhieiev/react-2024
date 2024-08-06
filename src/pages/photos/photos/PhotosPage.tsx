import React, { FC, useEffect } from 'react';
import css from '../../styles/ItemsPage.module.css';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import PhotosComponent from '../../../components/photos/photos/PhotosComponent';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useParams, useSearchParams } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { photoActions } from '../../../store/slices/photo.slice';
import FiltrationComponent from '../../../components/filtration/FiltrationComponent';

const PhotosPage: FC = () => {
    const photos = useAppSelector(state => state.photoSlice.photos);
    const {albumId} = useParams();
    const dispatch = useAppDispatch();
    const [params] = useSearchParams({
        page: '1',
        skip: '25'
    });

    const skipParam = params.get('skip');
    const skip = skipParam ? +skipParam : 25;
    const pages = photos.length % skip === 0 ? photos.length / skip : Math.floor(photos.length / skip) + 1;

    useEffect(() => {
        if (albumId) {
            dispatch(photoActions.getByAlbum(albumId));
        } else {
            dispatch(photoActions.getAll());
        }
    }, [albumId]);

    return (
        <div className={css.Container}>
            <div>
                <h1>PHOTOS</h1>
                <FiltrationComponent items={photos.length} />
                <PhotosComponent />
            </div>
            <PaginationComponent pages={pages} />
        </div>
    );
};

export default PhotosPage;