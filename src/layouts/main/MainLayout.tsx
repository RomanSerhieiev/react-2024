import React, { FC, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderComponent from '../../components/header/HeaderComponent';
import { Context } from '../../context/Context';
import { IUser } from '../../interfaces/user.interface';
import { IPost } from '../../interfaces/post.interface';
import { userService } from '../../services/user.service';
import { postService } from '../../services/post.service';

const MainLayout: FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers(value.data))
        postService.getAll().then(value => setPosts(value.data))
    }, []);

    return (
        <Context.Provider value={
            {
                userStore: {
                    users
                },
                postStore: {
                    posts
                }
            }
        }>
            <HeaderComponent />
            <Outlet />
        </Context.Provider>
    );
};

export default MainLayout;