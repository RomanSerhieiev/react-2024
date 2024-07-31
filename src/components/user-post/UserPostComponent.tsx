import React, { FC } from 'react';
import { TUserPosts } from '../../types/user-posts.type';
import UserComponent from '../user/UserComponent';
import PostComponent from '../post/PostComponent';

interface IProps {
    user: TUserPosts
}

const UserPostComponent: FC<IProps> = ({user}) => {
    return (
        <div>
            <UserComponent user={user} />
            {user.posts.map(post => <PostComponent key={post.id} post={post} />)}
        </div>
    );
};

export default UserPostComponent;