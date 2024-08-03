import React, { FC } from 'react';
import css from '../../styles/ItemComponent.module.css';
import { useNavigate } from 'react-router-dom';
import { IComment } from '../../../interfaces/comment.interface';
import { navigateHelper } from '../../../helpers/navigate.helper';
import { EKey } from '../../../enums/local-storage-keys.enum';
import { useAppContext } from '../../../hooks/useAppContext';

interface IProps {
    comment: IComment;
}

const CommentComponent: FC<IProps> = ({comment}) => {
    const {
        commentSlice: {setSelectedComment}
    } = useAppContext();

    const navigate = useNavigate();

    return (
        <div className={css.Container}>
            <h3>{comment.id}. {comment.name.slice(0, 8)}</h3>
            <button onClick={() => navigateHelper(
                EKey.selectedComment,
                comment.id,
                '/comments',
                setSelectedComment,
                navigate
            )}>
                INFO
            </button>
        </div>
    );
};

export default CommentComponent;