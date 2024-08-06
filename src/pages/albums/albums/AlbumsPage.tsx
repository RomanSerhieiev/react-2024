import React, { FC, useEffect } from 'react';
import css from '../../styles/ItemsPage.module.css';
import AlbumsComponent from '../../../components/albums/albums/AlbumsComponent';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { albumActions } from '../../../store/slices/album.slice';
import { useParams, useSearchParams } from 'react-router-dom';
import FiltrationComponent from '../../../components/filtration/FiltrationComponent';

const AlbumsPage: FC = () => {
    const albums = useAppSelector(state => state.albumSlice.albums);
    const {userId} = useParams();
    const dispatch = useAppDispatch();
    const [params] = useSearchParams({
        page: '1',
        skip: '25'
    });

    const skipParam = params.get('skip');
    const skip = skipParam ? +skipParam : 25;
    const pages = albums.length % skip === 0 ? albums.length / skip : Math.floor(albums.length / skip) + 1

    useEffect(() => {
        if (userId) {
            dispatch(albumActions.getByUser(userId));
        } else {
            dispatch(albumActions.getAll());
        }
    }, [userId]);

    return (
        <div className={css.Container}>
            <div>
                <h1>ALBUMS</h1>
                <FiltrationComponent items={albums.length} />
                <AlbumsComponent />
            </div>
            <PaginationComponent pages={pages} />
        </div>
    );
};

export default AlbumsPage;