import React, { FC } from 'react';
import css from './CommentComponent.module.css';
import { useNavigate } from 'react-router-dom';
import { IComment } from '../../../interfaces/comment.interface';

interface IProps {
    comment: IComment
}

const CommentComponent: FC<IProps> = ({comment}) => {
    const navigate = useNavigate();

    return (
        <div className={css.Container}>
            <h3>{comment.id}. {comment.name.slice(0, 8)}</h3>
            <button onClick={() => navigate(`${comment.id}`)}>INFO</button>
        </div>
    );
};

export default CommentComponent;