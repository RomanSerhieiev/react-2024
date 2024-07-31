import React, { FC, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderComponent from '../../components/header/HeaderComponent';
import { useStore } from '../../store/store';
import { userService } from '../../services/user.service';
import { postService } from '../../services/post.service';

const MainLayout: FC = () => {
    const {userSlice: {selectedUser, loadUsers}, postSlice: {loadPosts}} = useStore();

    useEffect(() => {
        userService.getAll().then(value => loadUsers(value.data));
        postService.getAll().then(value => loadPosts(value.data));
    }, []);

    return (
        <div>
            <HeaderComponent />
            <Outlet />
            {selectedUser && <div><hr />{selectedUser.email}</div>}
        </div>
    );
};

export default MainLayout;