import React, { FC, useEffect } from 'react';
import css from '../../styles/ItemInfoPage.module.css';
import { useParams } from 'react-router-dom';
import PostInfoComponent from '../../../components/posts/post-info/PostInfoComponent';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { postActions } from '../../../store/slices/post.slice';

const PostInfoPage: FC = () => {
    const dispatch = useAppDispatch();
    const {postId = '1'} = useParams();

    useEffect(() => {
        dispatch(postActions.getById(postId));
    }, [postId]);

    return (
        <div className={css.Container}>
            <PostInfoComponent />
        </div>
    );
};

export default PostInfoPage;