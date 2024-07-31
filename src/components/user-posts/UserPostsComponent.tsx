import React, { FC, useEffect, useMemo, useState } from 'react';
import { TUserPosts } from '../../types/user-posts.type';
import UserPostComponent from '../user-post/UserPostComponent';
import { useStore } from '../../store/store';

const UserPostsComponent: FC = () => {
    const {userSlice: {users}, postSlice: {posts}} = useStore();
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