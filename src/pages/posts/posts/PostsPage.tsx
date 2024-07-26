import React, { FC, useEffect, useState } from 'react';
import css from './PostsPage.module.css';
import PostsComponent from '../../../components/posts/posts/PostsComponent';
import { useAppLocation } from '../../../hooks/useAppLocation';
import { IPost } from '../../../interfaces/post.interface';
import { postService } from '../../../services/post.service';
import { useParams, useSearchParams } from 'react-router-dom';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import FiltrationComponent from '../../../components/filtration/FiltrationComponent';

const PostsPage: FC = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [filteredPosts, setFilteredPosts] = useState<IPost[]>([]);
    const [pages, setPages] = useState<number>(1);
    const [params] = useSearchParams({page: '1'});
    const {state} = useAppLocation<IPost[] | null>();
    const {userId} = useParams();

    useEffect(() => {
        if (state) {
            setPosts(state);
        } else if (userId) {
            postService.getByUser(userId)
                .then(({data}) => {
                    setPosts(data);
                });
        } else {
            postService.getAll()
                .then(({data}) => {
                    setPosts(data);
                });
        }
    }, [state, userId]);

    useEffect(() => {
        const pageParam = params.get('page');
        const page = pageParam ? +pageParam : 1;
        const skipParam = params.get('skip');
        const skip = skipParam ? +skipParam : 25;

        setFilteredPosts(posts.slice((page - 1) * skip, (page - 1) * skip + skip));

        if (posts.length % skip === 0) {
            setPages(posts.length / skip)
        } else {
            setPages(Math.floor(posts.length / skip) + 1)
        }
    }, [params, posts]);

    return (
        <div className={css.Container}>
            <div>
                <h2>POSTS</h2>
                <FiltrationComponent />
                <PostsComponent posts={filteredPosts} />
            </div>
            <PaginationComponent pages={pages} />
        </div>
    );
};

export default PostsPage;