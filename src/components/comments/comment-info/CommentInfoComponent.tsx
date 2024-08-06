import React, { FC } from 'react';
import css from '../../styles/ItemInfoComponent.module.css';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/useAppSelector';

const CommentInfoComponent: FC = () => {
    const comment = useAppSelector(state => state.commentSlice.comment);

    const navigate = useNavigate();

    return (
        comment && <div className={css.Container}>
          <h3>{comment.id}. {comment.name}</h3>
          <p className={css.Body}>{comment.body}</p>
          <p>EMAIL: <span className={css.Email}>{comment.email}</span></p>
          <button onClick={() => navigate(`/posts/${comment.postId}`)}>POST</button>
        </div>
    );
};

export default CommentInfoComponent;