import React, { FC } from 'react';
import { IPost } from '../../interfaces/post.interface';

interface IProps {
    post: IPost
}

const PostComponent: FC<IProps> = ({post}) => {
    return (
        <ul>
            <li>{post.id}. {post.title}</li>
        </ul>
    );
};

export default PostComponent;