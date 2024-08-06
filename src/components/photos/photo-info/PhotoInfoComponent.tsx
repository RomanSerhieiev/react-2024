import React, { FC } from 'react';
import css from '../../styles/ItemInfoComponent.module.css';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/useAppSelector';

const PhotoInfoComponent: FC = () => {
    const photo = useAppSelector(state => state.photoSlice.photo);

    const navigate = useNavigate();

    return (
        photo && <div className={css.Container}>
          <h3>{photo.id}. {photo.title}</h3>
          <img src={photo.url} alt={photo.title} />
          <button onClick={() => navigate(`/albums/${photo.albumId}`)}>ALBUM</button>
        </div>
    );
};

export default PhotoInfoComponent;