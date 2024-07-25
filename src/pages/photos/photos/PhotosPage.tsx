import React, { FC, useEffect, useState } from 'react';
import css from './PhotosPage.module.css';
import PhotosComponent from '../../../components/photos/photos/PhotosComponent';
import { useAppLocation } from '../../../hooks/useAppLocation';
import { IPhoto } from '../../../interfaces/photo.interface';
import { photoService } from '../../../services/photo.service';
import { useParams } from 'react-router-dom';

const PhotosPage: FC = () => {
    const [photos, setPhotos] = useState<IPhoto[]>([]);
    const { state } = useAppLocation<IPhoto[] | null>()
    const { albumId } = useParams()

    useEffect(() => {
        if (state) {
            setPhotos(state)
        } else if (albumId) {
            photoService.getByAlbum(albumId)
                .then(value => {
                    setPhotos(value.data)
                })
        } else {
            photoService.getAll()
                .then(value => {
                    setPhotos(value.data)
                })
        }
    }, [state, albumId]);

    return (
        <div className={css.Container}>
            <h2>PHOTOS</h2>
            <PhotosComponent photos={photos} />
        </div>
    );
};

export default PhotosPage;