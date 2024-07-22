import React, { FC } from 'react';
import css from './PostsComponent.module.css';
import PostComponent from '../post/PostComponent';
import { IPost } from '../../../interfaces/post.interface';

interface IProps {
    posts: IPost[]
}

const PostsComponent: FC<IProps> = ({posts}) => {
    return (
        <div className={css.Container}>
            {posts.map(post => <PostComponent key={post.id} post={post} />)}
        </div>
    );
};

export default PostsComponent;