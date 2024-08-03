import React, { FC } from 'react';
import css from '../../styles/ItemComponent.module.css';
import { IPhoto } from '../../../interfaces/photo.interface';
import { useNavigate } from 'react-router-dom';
import { navigateHelper } from '../../../helpers/navigate.helper';
import { EKey } from '../../../enums/local-storage-keys.enum';
import { useAppContext } from '../../../hooks/useAppContext';

interface IProps {
    photo: IPhoto;
}

const PhotoComponent: FC<IProps> = ({photo}) => {
    const {
        photoSlice: {setSelectedPhoto}
    } = useAppContext();

    const navigate = useNavigate();

    return (
        <div className={css.Container}>
            <h3>{photo.id}. {photo.title.slice(0, 8)}</h3>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <button onClick={() => navigateHelper(
                EKey.selectedPhoto,
                photo.id,
                '/photos',
                setSelectedPhoto,
                navigate
            )}>
                INFO
            </button>
        </div>
    );
};

export default PhotoComponent;