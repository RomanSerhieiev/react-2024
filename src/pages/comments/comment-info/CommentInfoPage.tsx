import React, { FC, useEffect } from 'react';
import css from '../../styles/ItemInfoPage.module.css';
import { useParams } from 'react-router-dom';
import CommentInfoComponent from '../../../components/comments/comment-info/CommentInfoComponent';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { commentActions } from '../../../store/slices/comment.slice';

const CommentInfoPage: FC = () => {
    const dispatch = useAppDispatch();
    const {commentId = '1'} = useParams();

    useEffect(() => {
        dispatch(commentActions.getById(commentId));
    }, [commentId]);

    return (
        <div className={css.Container}>
            <CommentInfoComponent />
        </div>
    );
};

export default CommentInfoPage;