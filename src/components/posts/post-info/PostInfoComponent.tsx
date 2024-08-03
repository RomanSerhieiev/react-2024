import React, { FC } from 'react';
import css from '../../styles/ItemInfoComponent.module.css';
import { IPost } from '../../../interfaces/post.interface';
import { IUser } from '../../../interfaces/user.interface';
import { IComment } from '../../../interfaces/comment.interface';
import { useNavigate } from 'react-router-dom';
import { navigateHelper } from '../../../helpers/navigate.helper';
import { EKey } from '../../../enums/local-storage-keys.enum';
import { useAppContext } from '../../../hooks/useAppContext';

interface IProps {
    post: IPost,
    user: IUser,
    comments: IComment[],
}

const PostInfoComponent: FC<IProps> = ({post, user, comments}) => {
    const {
        userSlice: {setSelectedUser},
        commentSlice: {setSelectedComment},
    } = useAppContext();

    const navigate = useNavigate();

    return (
        <div className={css.Container}>
            <h2>{post.id}. {post.title}</h2>
            <div className={css.MainContainer}>
                <p className={css.Body}>{post.body}</p>
                <div>USER: <button onClick={() => navigateHelper(EKey.selectedUser, user.id, `/users`, setSelectedUser, navigate)}>{user.name}</button></div>
            </div>
            <h3>{post.title}'s comments</h3>
            <div className={css.ItemsContainer}>
                {comments.map(comment => (
                    <div className={css.ItemContainer} key={comment.id}>
                        <h4>{comment.id}. {comment.name}</h4>
                        <button onClick={() => navigateHelper(EKey.selectedComment, comment.id, '/comments', setSelectedComment, navigate)}>INFO</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostInfoComponent;