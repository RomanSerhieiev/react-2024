import React, { FC, useEffect, useState } from 'react';
import css from './AlbumsPage.module.css';
import AlbumsComponent from '../../../components/albums/albums/AlbumsComponent';
import { useAppLocation } from '../../../hooks/useAppLocation';
import { IAlbum } from '../../../interfaces/album.interface';
import { albumService } from '../../../services/album.service';
import { useParams } from 'react-router-dom';

const AlbumsPage: FC = () => {
    const [albums, setAlbums] = useState<IAlbum[]>([]);
    const { state } = useAppLocation<{ albums: IAlbum[] } | null>()
    const { userId } = useParams()

    useEffect(() => {
        if (state) {
            setAlbums(state.albums)
        } else if (userId) {
            albumService.getByUser(userId)
                .then(value => {
                    setAlbums(value.data)
                })
        } else {
            albumService.getAll()
                .then(value => {
                    setAlbums(value.data)
                })
        }
    }, [userId, state]);

    return (
        <div className={css.Container}>
            <h2>ALBUMS</h2>
            <AlbumsComponent albums={albums} />
        </div>
    );
};

export default AlbumsPage;