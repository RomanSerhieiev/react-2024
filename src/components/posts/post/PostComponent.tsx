import React, { FC } from 'react';
import css from './PostComponent.module.css'
import { IPost } from '../../../interfaces/post.interface';
import { useNavigate } from 'react-router-dom';

interface IProps {
    post: IPost
}

const PostComponent: FC<IProps> = ({post}) => {
    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate(`${post.id}`, {state: {post}})
    }

    return (
        <div className={css.Container}>
            <h3>{post.id}. {post.title.slice(0, 8)}</h3>
            <button onClick={navigateHandler}>INFO</button>
        </div>
    );
};

export default PostComponent;