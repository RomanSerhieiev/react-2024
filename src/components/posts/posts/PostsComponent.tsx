import React, { FC } from 'react';
import css from '../../styles/ItemsComponent.module.css';
import PostComponent from '../post/PostComponent';
import { useAppContext } from '../../../hooks/useAppContext';

const PostsComponent: FC = () => {
    const {
        postSlice: {posts, postsPage}
    } = useAppContext();

    return (
        <div className={css.Container}>
            {posts.length && posts[postsPage - 1].map(post => <PostComponent key={post.id} post={post} />)}
        </div>
    );
};

export default PostsComponent;