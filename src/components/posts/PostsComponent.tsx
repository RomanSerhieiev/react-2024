import React, { FC } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import PostComponent from '../post/PostComponent';

const PostsComponent: FC = () => {
    const {posts} = useAppSelector(state => state.postSlice)

    return (
        <div>
            {posts.map(post => <PostComponent key={post.id} post={post} />)}
        </div>
    );
};

export default PostsComponent;