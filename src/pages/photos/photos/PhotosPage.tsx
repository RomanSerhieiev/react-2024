import React, { FC } from 'react';
import css from '../../styles/ItemsPage.module.css';
import FiltrationComponent from '../../../components/filtration/FiltrationComponent';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import { EKey } from '../../../enums/local-storage-keys.enum';
import PhotosComponent from '../../../components/photos/photos/PhotosComponent';
import { useAppContext } from '../../../hooks/useAppContext';

const PhotosPage: FC = () => {
    const {
        photoSlice: {
            photosPageSize,
            setPhotosPageSize,
            photos,
            photosPage,
            setPhotosPage
        }
    } = useAppContext();

    return (
        <div className={css.Container}>
            <div>
                <h1>PHOTOS</h1>
                <FiltrationComponent pageSize={photosPageSize} enumKey={EKey.photosPageSize} setPageSize={setPhotosPageSize} />
                <PhotosComponent />
            </div>
            <PaginationComponent enumKey={EKey.photosPage} page={photosPage} pages={photos.length} setPage={setPhotosPage} />
        </div>
    );
};

export default PhotosPage;