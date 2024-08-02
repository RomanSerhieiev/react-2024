import React, { FC, useEffect } from 'react';
import './App.css';
import { useAppDispatch } from './hooks/useAppDispatch';
import { useAppSelector } from './hooks/useAppSelector';
import { userActions } from './redux/slices/user.slice';
import { postActions } from './redux/slices/post.slice';

const App: FC = () => {
    const {userSlice: {users}, postSlice: {posts}} = useAppSelector(state => state)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(userActions.loadUsers())
        dispatch(postActions.loadPosts())
    }, [])

    return (
        <div>
            {users.map(user => <div key={user.id}>{user.id}. {user.name}</div>)}
            <hr/>
            {posts.map(post => <div key={post.id}>{post.id}. {post.title}</div>)}
        </div>
    );
};

export default App;
