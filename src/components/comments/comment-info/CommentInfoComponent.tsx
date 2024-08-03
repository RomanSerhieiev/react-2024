import React, { FC } from 'react';
import css from '../../styles/ItemInfoComponent.module.css';
import { IComment } from '../../../interfaces/comment.interface';
import { IPost } from '../../../interfaces/post.interface';
import { useNavigate } from 'react-router-dom';
import { EKey } from '../../../enums/local-storage-keys.enum';
import { navigateHelper } from '../../../helpers/navigate.helper';
import { useAppContext } from '../../../hooks/useAppContext';

interface IProps {
    comment: IComment,
    post: IPost
}

const CommentInfoComponent: FC<IProps> = ({comment, post}) => {
    const {
        postSlice: {setSelectedPost},
    } = useAppContext();

    const navigate = useNavigate();

    return (
        <div className={css.Container}>
            <div className={css.MainContainer}>
                <h2>{comment.id}. {comment.name}</h2>
                <p className={css.Body}>{comment.body}</p>
                <p>EMAIL: <span className={css.Email}>{comment.email}</span></p>
                <div>POST: <button onClick={() => navigateHelper(EKey.selectedPost, post.id, `/posts`, setSelectedPost, navigate)}>{post.title}</button></div>
            </div>
        </div>
    );
};

export default CommentInfoComponent;