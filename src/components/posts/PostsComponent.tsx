import React, { FC } from 'react';
import { useAppContext } from '../../hooks/useAppContext';
import PostComponent from '../post/PostComponent';

const PostsComponent: FC = () => {
    const {postStore: {posts}} = useAppContext()

    return (
        <div>
            {posts.map(post => <PostComponent key={post.id} post={post} />)}
        </div>
    );
};

export default PostsComponent;