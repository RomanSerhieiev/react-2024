import React, { FC } from 'react';
import css from './CommentComponent.module.css'
import { IComment } from '../../../interfaces/comment.interface';
import { useNavigate } from 'react-router-dom';

interface IProps {
    comment: IComment
}

const CommentComponent: FC<IProps> = ({comment}) => {
    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate(`${comment.id}`, {state: {comment}})
    }

    return (
        <div className={css.Container}>
            <h3>{comment.id}. {comment.name.slice(0, 8)}</h3>
            <button onClick={navigateHandler}>INFO</button>
        </div>
    );
};

export default CommentComponent;