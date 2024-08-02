import React, { FC } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import PostsComponent from '../../components/posts/PostsComponent';

const PostsPage: FC = () => {
    return (
        <PostsComponent />
    );
};

export default PostsPage;