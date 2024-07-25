import React, { FC } from 'react';
import css from './CommentInfoComponent.module.css';
import { IComment } from '../../../interfaces/comment.interface';
import { IPost } from '../../../interfaces/post.interface';
import { useAppNavigate } from '../../../hooks/useAppNavigate';

interface IProps {
    comment: IComment
    post: IPost
}

const CommentInfoComponent: FC<IProps> = ({comment, post}) => {
    const navigateHandler = useAppNavigate()

    return (
        <div className={css.Container}>
            <h3>{comment.id}. {comment.name}</h3>
            <p className={css.Body}>{comment.body}</p>
            <p>EMAIL: <span className={css.Email}>{comment.email}</span></p>
            <div>POST: <button onClick={() => navigateHandler<IPost>(`/posts/${post.id}`, post)}>{post.title}</button></div>
        </div>
    );
};

export default CommentInfoComponent;