import React, { FC } from 'react';
import { IAlbum } from '../../interfaces/album.interface';
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
        <div>
            {album.id}. {album.title} <button onClick={navigateHandler}>details by button</button>
        </div>
    );
};

export default AlbumComponent;