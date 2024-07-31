import React, { FC, useEffect, useMemo, useState } from 'react';
import { useAppContext } from '../../hooks/useAppContext';
import { TUserPosts } from '../../types/user-posts.type';
import UserPostComponent from '../user-post/UserPostComponent';

const UserPostsComponent: FC = () => {
    const {userStore: {users}, postStore: {posts}} = useAppContext();
    const [userPosts, setUserPosts] = useState<TUserPosts[]>([]);

    const combineUserPosts =  useMemo(() => {
        return users.map(user => {
            return {...user, posts: posts.filter(post => post.userId === user.id)};
        });
    }, [users, posts])

    useEffect(() => {
        setUserPosts(combineUserPosts)
    }, [combineUserPosts])

    return (
        <div>
            {userPosts.map(user => <UserPostComponent key={user.id} user={user} />)}
        </div>
    );
};

export default UserPostsComponent;