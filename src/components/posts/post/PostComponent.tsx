import React, { FC } from 'react';
import css from '../../styles/ItemComponent.module.css';
import { IPost } from '../../../interfaces/post.interface';
import { useNavigate } from 'react-router-dom';

interface IProps {
    post: IPost;
}

const PostComponent: FC<IProps> = ({post}) => {
    const navigate = useNavigate();

    return (
        <div className={css.Container}>
            <h3>{post.id}. {post.title}</h3>
            <button onClick={() => navigate(`${post.id}`)}>INFO</button>
        </div>
    );
};

export default PostComponent;