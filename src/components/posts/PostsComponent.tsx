import React, { FC } from 'react';
import PostComponent from '../post/PostComponent';
import { useStore } from '../../store/store';

const PostsComponent: FC = () => {
    const {postSlice: {posts}} = useStore()

    return (
        <div>
            {posts.map(post => <PostComponent key={post.id} post={post} />)}
        </div>
    );
};

export default PostsComponent;