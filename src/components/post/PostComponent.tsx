import React, { FC } from 'react';
import { IPost } from '../../interfaces/post.interface';

interface IProps {
    post: IPost
}

const PostComponent: FC<IProps> = ({post}) => {
    return (
        <div>
            {post.id}. {post.title}
        </div>
    );
};

export default PostComponent;