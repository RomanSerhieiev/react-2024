import React, { FC } from 'react';
import { IPost } from '../../interfaces/post.interface';
import { useAppNavigate } from '../../hooks/useAppNavigate';

interface IProps {
    post: IPost
}

const PostComponent: FC<IProps> = ({post}) => {
    const navigate = useAppNavigate();

    return (
        <div>
            {post.id}. {post.title}
            <button onClick={() => navigate(`${post.id}`, post)}>details</button>
        </div>
    );
};

export default PostComponent;