import React, { FC, useEffect, useState } from 'react';
import './App.css';
import IUser from './model/IUser';
import { UserComponent } from './components/user/UserComponent';
import { getUsers } from './services/user.service';
import { PostsComponent } from './components/posts/PostsComponent';
import { IPost } from './model/IPost';
import { getPostsOfUser } from './services/post.service';

const App: FC = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    const [userId, setUserId] = useState<number>(0);
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        getUsers()
            .then(value => {
                setUsers(value.data)
            })

        return () => {
            console.log('Users fetch done');
        };
    }, []);

    useEffect(() => {
        if (userId !== 0) {
            getPostsOfUser(userId).then(value => setPosts(value.data));
        }
    }, [userId]);

    const clickHandler = (id: number) => {
        setUserId(id)
    }

    return (
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
            <PostsComponent posts={posts}/>
        </div>
    );
};

export default App;
