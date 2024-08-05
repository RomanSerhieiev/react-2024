import React, { FC, useEffect } from 'react';
import HeaderComponent from '../../components/header/HeaderComponent';
import { Outlet } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { userActions } from '../../store/slices/user.slice';
import { postActions } from '../../store/slices/post.slice';

const MainLayout: FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.loadUsers())
        dispatch(postActions.loadPosts())
    }, []);

    return (
        <div>
            <HeaderComponent />
            <Outlet />
        </div>
    );
};

export default MainLayout;