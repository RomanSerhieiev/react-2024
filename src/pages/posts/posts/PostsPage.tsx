import React, { FC, useEffect } from 'react';
import css from '../../styles/ItemsPage.module.css';
import PostsComponent from '../../../components/posts/posts/PostsComponent';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useParams, useSearchParams } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { albumActions } from '../../../store/slices/album.slice';
import { postActions } from '../../../store/slices/post.slice';
import FiltrationComponent from '../../../components/filtration/FiltrationComponent';

const PostsPage: FC = () => {
    const posts = useAppSelector(state => state.postSlice.posts);
    const {userId} = useParams();
    const dispatch = useAppDispatch();
    const [params] = useSearchParams({
        page: '1',
        skip: '25'
    });

    const skipParam = params.get('skip');
    const skip = skipParam ? +skipParam : 25;
    const pages = posts.length % skip === 0 ? posts.length / skip : Math.floor(posts.length / skip) + 1

    useEffect(() => {
        if (userId) {
            dispatch(postActions.getByUser(userId));
        } else {
            dispatch(postActions.getAll());
        }
    }, [userId]);

    return (
        <div className={css.Container}>
            <div>
                <h1>POSTS</h1>
                <FiltrationComponent items={posts.length} />
                <PostsComponent />
            </div>
            <PaginationComponent pages={pages} />
        </div>
    );
};

export default PostsPage;