import React, { FC } from 'react';
import css from './AlbumComponent.module.css'
import { IAlbum } from '../../../interfaces/album.interface';
import { useNavigate } from 'react-router-dom';

interface IProps {
    album: IAlbum
}

const AlbumComponent: FC<IProps> = ({album}) => {
    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate(`${album.id}`, {state: {album}})
    }

    return (
        <div className={css.Container}>
            <h3>{album.id}. {album.title.slice(0, 8)}</h3>
            <button onClick={navigateHandler}>INFO</button>
        </div>
    );
};

export default AlbumComponent;