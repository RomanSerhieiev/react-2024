import React, { FC } from 'react';
import { IPost } from '../../../interfaces/post.interface';
import { IUser } from '../../../interfaces/user.interface';
import css from '../../comments/comment-info/CommentInfoComponent.module.css';
import { IComment } from '../../../interfaces/comment.interface';
import { useAppNavigate } from '../../../hooks/useAppNavigate';

interface IProps {
    post: IPost,
    user: IUser,
    comments: IComment[]
}

const PostInfoComponent: FC<IProps> = ({post, user, comments}) => {
    const navigateHandler = useAppNavigate()

    return (
        <div className={css.Container}>
            <h3>{post.id}. {post.title}</h3>
            <p className={css.Body}>{post.body}</p>
            <div>USER: <button onClick={() => navigateHandler<IUser>(`/users/${user.id}`, user)}>{user.name}</button></div>
            <button onClick={() => navigateHandler<IComment[]>(`comments`, comments)}>COMMENTS</button>
        </div>
    );
};

export default PostInfoComponent;