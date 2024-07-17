import React, { FC, useEffect, useState } from 'react';
import { IUser } from '../../interfaces/IUser';
import { IPost } from '../../interfaces/IPost';
import { getUsers } from '../../services/user.service';
import { getPostsOfUser } from '../../services/post.service';
import UserComponent from '../user/UserComponent';
import PostsComponent from '../posts/PostsComponent';
import css from './UsersComponent.module.css';

const UsersComponent: FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [user, setUser] = useState<Partial<IUser>>({id: 0});
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        getUsers()
            .then(value => {
                setUsers([...value.data.users]);
            });
    }, []);

    useEffect(() => {
        if (user.id !== undefined && user.id !== 0) {
            getPostsOfUser(user.id).then(value => {
                setPosts([...value.data.posts]);
            });
        }
    }, [user]);

    const userIfo = (user: Partial<IUser>) => {
        setUser(user);
    };

    return (
        <div className={css.Container}>
            <div className={css.Users}>
                {users.map((user, index) =>
                    <UserComponent key={index}
                                   user={user}
                                   userIfo={userIfo}
                    />)}
            </div>
            <PostsComponent posts={posts} user={user}/>
        </div>
    );
};

export default UsersComponent;
