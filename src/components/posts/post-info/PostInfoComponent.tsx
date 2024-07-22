import React, { FC } from 'react';
import { IPost } from '../../../interfaces/post.interface';
import { IUser } from '../../../interfaces/user.interface';
import { useNavigate } from 'react-router-dom';
import css from '../../comments/comment-info/CommentInfoComponent.module.css';
import { IComment } from '../../../interfaces/comment.interface';

interface IProps {
    post: IPost,
    user: IUser,
    comments: IComment[]
}

const PostInfoComponent: FC<IProps> = ({post, user, comments}) => {
    const navigate = useNavigate();

    const commentsNavigateHandler = () => {
        navigate(`comments`, {state: {comments}})
    }

    const userNavigateHandler = () => {
        navigate(`/users/${user.id}`, {state: {user}})
    }

    return (
        <div className={css.Container}>
            <h3>{post.id}. {post.title}</h3>
            <p className={css.Body}>{post.body}</p>
            <div>USER: <button onClick={userNavigateHandler}>{user.name}</button></div>
            <button onClick={commentsNavigateHandler}>COMMENTS</button>
        </div>
    );
};

export default PostInfoComponent;