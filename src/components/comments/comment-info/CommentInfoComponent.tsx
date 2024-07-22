import React, { FC } from 'react';
import css from './CommentInfoComponent.module.css'
import { IComment } from '../../../interfaces/comment.interface';
import { IPost } from '../../../interfaces/post.interface';
import { useNavigate } from 'react-router-dom';

interface IProps {
    comment: IComment
    post: IPost
}

const CommentInfoComponent: FC<IProps> = ({comment, post}) => {
    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate(`/posts/${post.id}`, {state: {post}})
    }

    return (
        <div className={css.Container}>
            <h3>{comment.id}. {comment.name}</h3>
            <p className={css.Body}>{comment.body}</p>
            <p>EMAIL: <span className={css.Email}>{comment.email}</span></p>
            <div>POST: <button onClick={navigateHandler}>{post.title}</button></div>
        </div>
    );
};

export default CommentInfoComponent;