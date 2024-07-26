import React, { FC, useEffect, useState } from 'react';
import css from './PhotosPage.module.css';
import PhotosComponent from '../../../components/photos/photos/PhotosComponent';
import { useAppLocation } from '../../../hooks/useAppLocation';
import { IPhoto } from '../../../interfaces/photo.interface';
import { photoService } from '../../../services/photo.service';
import { useParams, useSearchParams } from 'react-router-dom';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import FiltrationComponent from '../../../components/filtration/FiltrationComponent';

const PhotosPage: FC = () => {
    const [photos, setPhotos] = useState<IPhoto[]>([]);
    const [filteredPhotos, setFilteredPhotos] = useState<IPhoto[]>([]);
    const [pages, setPages] = useState<number>(1);
    const [params] = useSearchParams({page: '1'});
    const {state} = useAppLocation<IPhoto[] | null>();
    const {albumId} = useParams();

    useEffect(() => {
        if (state) {
            setPhotos(state);
        } else if (albumId) {
            photoService.getByAlbum(albumId)
                .then(({data}) => {
                    setPhotos(data);
                });
        } else {
            photoService.getAll()
                .then(({data}) => {
                    setPhotos(data);
                });
        }
    }, [state, albumId]);

    useEffect(() => {
        const pageParam = params.get('page');
        const page = pageParam ? +pageParam : 1;
        const skipParam = params.get('skip');
        const skip = skipParam ? +skipParam : 25;

        setFilteredPhotos(photos.slice((page - 1) * skip, (page - 1) * skip + skip));

        if (photos.length % skip === 0) {
            setPages(photos.length / skip)
        } else {
            setPages(Math.floor(photos.length / skip) + 1)
        }
    }, [params, photos]);

    return (
        <div className={css.Container}>
            <div>
                <h2>PHOTOS</h2>
                <FiltrationComponent />
                <PhotosComponent photos={filteredPhotos} />
            </div>
            <PaginationComponent pages={pages} />
        </div>
    );
};

export default PhotosPage;