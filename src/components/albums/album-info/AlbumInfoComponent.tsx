import React, { FC } from 'react';
import css from '../../styles/ItemInfoComponent.module.css';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/useAppSelector';

const AlbumInfoComponent: FC = () => {
    const album = useAppSelector(state => state.albumSlice.album);

    const navigate = useNavigate();

    return (
        album && <div className={css.Container}>
          <h3>{album.id}. {album.title}</h3>
          <button onClick={() => navigate(`/users/${album.userId}`)}>USER</button>
          <button onClick={() => navigate(`photos`)}>PHOTOS</button>
        </div>
    );
};

export default AlbumInfoComponent;