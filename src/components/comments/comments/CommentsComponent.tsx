import React, { FC } from 'react';
import css from './CommentsComponent.module.css';
import CommentComponent from '../comment/CommentComponent';
import { IComment } from '../../../interfaces/comment.interface';

interface IProps {
    comments: IComment[]
}

const CommentsComponent: FC<IProps> = ({comments}) => {
    return (
        <div className={css.Container}>
            {comments.map(comment => <CommentComponent key={comment.id} comment={comment} />)}
        </div>
    );
};

export default CommentsComponent;