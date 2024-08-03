import React, { FC } from 'react';
import css from '../../styles/ItemComponent.module.css';
import { IPhoto } from '../../../interfaces/photo.interface';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../../store/store';
import { navigateHelper } from '../../../helpers/navigate.helper';
import { EKey } from '../../../enums/local-storage-keys.enum';

interface IProps {
    photo: IPhoto;
}

const PhotoComponent: FC<IProps> = ({photo}) => {
    const {
        photoSlice: {setSelectedPhoto}
    } = useStore();

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