import React, { FC, useEffect, useState } from 'react';
import css from './PhotoInfoPage.module.css'
import { useParams } from 'react-router-dom';
import { useAppLocation } from '../../../hooks/useAppLocation';
import { IPhoto } from '../../../interfaces/photo.interface';
import { photoService } from '../../../services/photo.service';
import PhotoInfoComponent from '../../../components/photos/photo-info/PhotoInfoComponent';
import { IAlbum } from '../../../interfaces/album.interface';
import { albumService } from '../../../services/album.service';

const PhotoInfoPage: FC = () => {
    const [photo, setPhoto] = useState<IPhoto>();
    const [album, setAlbum] = useState<IAlbum>();
    const {photoId} = useParams();
    const {state} = useAppLocation<{ photo: IPhoto } | null>();

    useEffect(() => {
        if (state) {
            setPhoto(state.photo);
        } else if (photoId) {
            photoService.getById(photoId)
                .then(value => {
                    setPhoto(value.data);
                });
        } else {
            throw new Error(`Couldn't find photo with id ${photoId}`);
        }
    }, [photoId, state]);

    useEffect(() => {
        if (photo) {
            albumService.getById(`${photo.albumId}`)
                .then(value => {
                    setAlbum(value.data);
                });
        }
    }, [photo]);

    return (
        <div className={css.Container}>
            {photo && album && <PhotoInfoComponent photo={photo} album={album} />}
        </div>
    );
};

export default PhotoInfoPage;