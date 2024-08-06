import React, { FC } from 'react';
import css from '../../styles/ItemsComponent.module.css';
import PostComponent from '../post/PostComponent';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useSearchParams } from 'react-router-dom';

const PostsComponent: FC = () => {
    const posts = useAppSelector(state => state.postSlice.posts);
    const [params] = useSearchParams({
        page: '1',
        skip: '25'
    });
    const pageParam = params.get('page');
    const page = pageParam ? +pageParam : 1;
    const skipParam = params.get('skip');
    const skip = skipParam ? +skipParam : 25;

    return (
        <div className={css.Container}>
            {posts.slice((page - 1) * skip, (page - 1) * skip + skip).map(post => <PostComponent key={post.id} post={post} />)}
        </div>
    );
};

export default PostsComponent;