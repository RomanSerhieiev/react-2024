import React, { FC } from 'react';
import css from '../../styles/ItemsPage.module.css';
import PostsComponent from '../../../components/posts/posts/PostsComponent';
import FiltrationComponent from '../../../components/filtration/FiltrationComponent';
import PaginationComponent from '../../../components/pagination/PaginationComponent';
import { EKey } from '../../../enums/local-storage-keys.enum';
import { useAppContext } from '../../../hooks/useAppContext';

const PostsPage: FC = () => {
    const {
        postSlice: {
            postsPageSize,
            setPostsPageSize,
            posts,
            postsPage,
            setPostsPage
        }
    } = useAppContext();

    return (
        <div className={css.Container}>
            <div>
                <h1>POSTS</h1>
                <FiltrationComponent pageSize={postsPageSize} enumKey={EKey.postsPageSize} setPageSize={setPostsPageSize} />
                <PostsComponent />
            </div>
            <PaginationComponent enumKey={EKey.postsPage} page={postsPage} pages={posts.length} setPage={setPostsPage} />
        </div>
    );
};

export default PostsPage;