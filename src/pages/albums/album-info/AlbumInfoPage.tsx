import React, { FC, useEffect } from 'react';
import css from '../../styles/ItemInfoPage.module.css';
import { useParams } from 'react-router-dom';
import AlbumInfoComponent from '../../../components/albums/album-info/AlbumInfoComponent';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { albumActions } from '../../../store/slices/album.slice';

const AlbumInfoPage: FC = () => {
    const dispatch = useAppDispatch();
    const {albumId = '1'} = useParams();

    useEffect(() => {
        dispatch(albumActions.getById(albumId));
    }, [albumId]);

    return (
        <div className={css.Container}>
            <AlbumInfoComponent />
        </div>
    );
};

export default AlbumInfoPage;