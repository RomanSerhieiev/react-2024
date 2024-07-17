import React, { FC, ReactNode } from 'react';
import { IPost } from '../../interfaces/IPost';
import PostComponent from '../post/PostComponent';
import { IUser } from '../../interfaces/IUser';

interface IProps {
    posts: IPost[];
    user: Partial<IUser>
}

type PropsWithChildren<T> = T & { children?: ReactNode }

const PostsComponent: FC<PropsWithChildren<IProps>> = ({posts, user}) => {
    return (
        <div>
            {user && <h1>{user.id}. {user.firstName} {user.lastName}</h1>}
            {posts.map((post, index) => <PostComponent key={index} post={post} />)}
        </div>
    );
};

export default PostsComponent;