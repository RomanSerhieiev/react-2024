import React, { FC } from 'react';
import css from '../../styles/ItemComponent.module.css';
import { IAlbum } from '../../../interfaces/album.interface';
import { useNavigate } from 'react-router-dom';

interface IProps {
    album: IAlbum;
}

const AlbumComponent: FC<IProps> = ({album}) => {
    const navigate = useNavigate();

    return (
        <div className={css.Container}>
            <h3>{album.id}. {album.title}</h3>
            <button onClick={() => navigate(`${album.id}`)}>INFO</button>
        </div>
    );
};

export default AlbumComponent;