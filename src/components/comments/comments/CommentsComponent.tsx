import React, { FC } from 'react';
import css from '../../styles/ItemsComponent.module.css';
import CommentComponent from '../comment/CommentComponent';
import { useAppContext } from '../../../hooks/useAppContext';

const CommentsComponent: FC = () => {
    const {
        commentSlice: {comments, commentsPage}
    } = useAppContext();

    return (
        <div className={css.Container}>
            {comments.length && comments[commentsPage - 1].map(comment => <CommentComponent key={comment.id} comment={comment} />)}
        </div>
    );
};

export default CommentsComponent;