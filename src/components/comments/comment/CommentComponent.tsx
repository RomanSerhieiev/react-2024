import React, { FC } from 'react';
import css from './CommentComponent.module.css';
import { IComment } from '../../../interfaces/comment.interface';
import { useAppNavigate } from '../../../hooks/useAppNavigate';

interface IProps {
    comment: IComment
}

const CommentComponent: FC<IProps> = ({comment}) => {
    const navigateHandler = useAppNavigate()

    return (
        <div className={css.Container}>
            <h3>{comment.id}. {comment.name.slice(0, 8)}</h3>
            <button onClick={() => navigateHandler<IComment>(`${comment.id}`, comment)}>INFO</button>
        </div>
    );
};

export default CommentComponent;