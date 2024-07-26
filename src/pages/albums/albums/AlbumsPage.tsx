import React, { FC, useEffect, useState } from 'react';
import css from './AlbumsPage.module.css';
import AlbumsComponent from '../../../components/albums/albums/AlbumsComponent';
import { useAppLocation } from '../../../hooks/useAppLocation';
import { IAlbum } from '../../../interfaces/album.interface';
import { albumService } from '../../../services/album.service';
import { useParams, useSearchParams } from 'react-router-dom';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import FiltrationComponent from '../../../components/filtration/FiltrationComponent';

const AlbumsPage: FC = () => {
    const [albums, setAlbums] = useState<IAlbum[]>([]);
    const [filteredAlbums, setFilteredAlbums] = useState<IAlbum[]>([]);
    const [pages, setPages] = useState<number>(1);
    const [params] = useSearchParams();
    const {state} = useAppLocation<IAlbum[] | null>();
    const {userId} = useParams();

    useEffect(() => {
        if (state) {
            setAlbums(state);
        } else if (userId) {
            albumService.getByUser(userId)
                .then(({data}) => {
                    setAlbums(data);
                });
        } else {
            albumService.getAll()
                .then(({data}) => {
                    setAlbums(data);
                });
        }
    }, [userId, state]);

    useEffect(() => {
        const pageParam = params.get('page');
        const page = pageParam ? +pageParam : 1;
        const skipParam = params.get('skip');
        const skip = skipParam ? +skipParam : 25;

        setFilteredAlbums(albums.slice((page - 1) * skip, (page - 1) * skip + skip));

        if (albums.length % skip === 0) {
            setPages(albums.length / skip)
        } else {
            setPages(Math.floor(albums.length / skip) + 1)
        }
    }, [params, albums]);

    return (
        <div className={css.Container}>
            <div>
                <h2>ALBUMS</h2>
                <FiltrationComponent items={albums.length} />
                <AlbumsComponent albums={filteredAlbums} />
            </div>
            <PaginationComponent pages={pages} />
        </div>
    );
};

export default AlbumsPage;