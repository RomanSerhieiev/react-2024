import React, { FC } from 'react';
import css from '../../styles/ItemInfoComponent.module.css';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/useAppSelector';

const PostInfoComponent: FC = () => {
    const post = useAppSelector(state => state.postSlice.post);

    const navigate = useNavigate();

    return (
        post && <div className={css.Container}>
          <h3>{post.id}. {post.title}</h3>
          <p className={css.Body}>{post.body}</p>
          <button onClick={() => navigate(`/users/${post.userId}`)}>USER</button>
          <button onClick={() => navigate(`comments`)}>COMMENTS</button>
        </div>
    );
};

export default PostInfoComponent;