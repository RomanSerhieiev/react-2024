import React, { FC } from 'react';
import css from './PhotoComponent.module.css';
import { IPhoto } from '../../../interfaces/photo.interface';
import { useAppNavigate } from '../../../hooks/useAppNavigate';

interface IProps {
    photo: IPhoto
}

const PhotoComponent: FC<IProps> = ({photo}) => {
    const navigateHandler = useAppNavigate()

    return (
        <div className={css.Container}>
            <h3>{photo.id}. {photo.title.slice(0, 8)}</h3>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <button onClick={() => navigateHandler<IPhoto>(`${photo.id}`, photo)}>INFO</button>
        </div>
    );
};

export default PhotoComponent;