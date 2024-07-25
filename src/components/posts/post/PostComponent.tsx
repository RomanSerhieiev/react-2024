import React, { FC } from 'react';
import css from './PostComponent.module.css';
import { IPost } from '../../../interfaces/post.interface';
import { useAppNavigate } from '../../../hooks/useAppNavigate';

interface IProps {
    post: IPost
}

const PostComponent: FC<IProps> = ({post}) => {
    const navigateHandler = useAppNavigate()

    return (
        <div className={css.Container}>
            <h3>{post.id}. {post.title.slice(0, 8)}</h3>
            <button onClick={() => navigateHandler<IPost>(`${post.id}`, post)}>INFO</button>
        </div>
    );
};

export default PostComponent;