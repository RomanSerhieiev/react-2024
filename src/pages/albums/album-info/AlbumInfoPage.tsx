import React, { FC, useEffect, useState } from 'react';
import css from './AlbumInfoPage.module.css'
import AlbumInfoComponent from '../../../components/albums/album-info/AlbumInfoComponent';
import { IAlbum } from '../../../interfaces/album.interface';
import { useParams } from 'react-router-dom';
import { useAppLocation } from '../../../hooks/useAppLocation';
import { albumService } from '../../../services/album.service';
import { IUser } from '../../../interfaces/user.interface';
import { IPhoto } from '../../../interfaces/photo.interface';
import { userService } from '../../../services/user.service';
import { photoService } from '../../../services/photo.service';

const AlbumInfoPage: FC = () => {
    const [album, setAlbum] = useState<IAlbum>();
    const [user, setUser] = useState<IUser>();
    const [photos, setPhotos] = useState<IPhoto[]>([]);
    const { albumId } = useParams()
    const { state } = useAppLocation<{ album: IAlbum } | null>()

    useEffect(() => {
        if (state) {
            setAlbum(state.album)
        } else if (albumId) {
            albumService.getById(albumId)
                .then(value => {
                    setAlbum(value.data)
                })
        } else {
            throw new Error(`Couldn't find album with id ${albumId}`)
        }
    }, [albumId, state]);

    useEffect(() => {
        if (album) {
            userService.getById(`${album.userId}`)
                .then(value => {
                    setUser(value.data);
                });
            photoService.getByAlbum(`${album.id}`)
                .then(value => {
                    setPhotos(value.data);
                });
        }
    }, [album]);

    return (
        <div className={css.Container}>
            {album && user && photos &&<AlbumInfoComponent album={album} user={user} photos={photos} />}
        </div>
    );
};

export default AlbumInfoPage;