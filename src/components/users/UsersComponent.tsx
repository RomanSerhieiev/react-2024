import React, { FC, useEffect, useState } from 'react';
import IUser from '../../models/IUser';
import { IPost } from '../../models/IPost';
import { getUsers } from '../../services/user.service';
import { getPostsOfUser } from '../../services/post.service';
import { UserComponent } from '../user/UserComponent';
import { PostsComponent } from '../posts/PostsComponent';
import css from './UserComponent.module.css'

const UsersComponent: FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [userId, setUserId] = useState<number>(0);
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        getUsers()
            .then(value => {
                setUsers([...value.data])
            })

        return () => {
            console.log('Users fetch done');
        };
    }, []);

    useEffect(() => {
        if (userId !== 0) {
            getPostsOfUser(userId).then(value => setPosts([...value.data]));
        }
    }, [userId]);

    const clickHandler = (id: number) => {
        setUserId(id)
    }

    return (
        <div className={css.Container}>
            <div>
                {users.map(({
                               id,
                               name,
                               username,
                               email,
                               address,
                               phone,
                               website,
                               company
                           }, index) =>
                <UserComponent key={index}
                               id={id}
                               name={name}
                               username={username}
                               email={email}
                               address={address}
                               phone={phone}
                               website={website}
                               company={company}
                               clickHandler={clickHandler}
                />)}
            </div>
            <PostsComponent posts={posts}/>
        </div>
    );
};

export {
    UsersComponent
};