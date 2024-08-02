import React, { FC, useEffect } from 'react';
import './App.css';
import { useAppDispatch } from './hooks/useAppDispatch';
import { useAppSelector } from './hooks/useAppSelector';
import { userActions } from './redux/slices/user.slice';
import { postActions } from './redux/slices/post.slice';
import { Outlet } from 'react-router-dom';
import HeaderComponent from './components/header/HeaderComponent';

const App: FC = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(userActions.loadUsers())
        dispatch(postActions.loadPosts())
    }, [])

    return (
        <div>
            <HeaderComponent />
            <Outlet />
        </div>
    );
};

export default App;
