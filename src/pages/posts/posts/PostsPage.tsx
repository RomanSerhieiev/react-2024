import React, { FC, useEffect, useState } from 'react';
import css from './PostsPage.module.css';
import PostsComponent from '../../../components/posts/posts/PostsComponent';
import { useAppLocation } from '../../../hooks/useAppLocation';
import { IPost } from '../../../interfaces/post.interface';
import { postService } from '../../../services/post.service';
import { useParams } from 'react-router-dom';

const PostsPage: FC = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const { state } = useAppLocation<IPost[] | null>()
    const { userId } = useParams()

    useEffect(() => {
        if (state) {
            setPosts(state)
        } else if (userId) {
            postService.getByUser(userId)
                .then(value => {
                    setPosts(value.data)
                })
        } else {
            postService.getAll()
                .then(value => {
                    setPosts(value.data)
                })
        }
    }, [state, userId]);

    return (
        <div className={css.Container}>
            <h2>POSTS</h2>
            <PostsComponent posts={posts} />
        </div>
    );
};

export default PostsPage;