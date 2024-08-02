import React, { FC } from 'react';
import css from './CommentsComponent.module.css';
import { useStore } from '../../../store/store';
import CommentComponent from '../comment/CommentComponent';

const CommentsComponent: FC = () => {
    const {commentSlice: {comments, commentsPage}} = useStore()

    return (
        <div className={css.Container}>
            {comments.length && comments[commentsPage - 1].map(comment => <CommentComponent key={comment.id} comment={comment} />)}
        </div>
    );
};

export default CommentsComponent;