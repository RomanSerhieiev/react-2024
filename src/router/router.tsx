import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom';
import UsersPage from '../pages/users/UsersPage';
import PostsPage from '../pages/posts/PostsPage';
import MainLayout from '../layouts/main/MainLayout';
import ErrorLayout from '../layouts/error/ErrorLayout';
import UserInfoPage from '../pages/user-info/UserInfoPage';
import PostInfoPage from '../pages/post-info/PostInfoPage';

const routs: RouteObject[] = [
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorLayout />,
        children: [
            {
                index: true,
                element: <Navigate to="/users" />
            },
            {
                path: '/users',
                element: <UsersPage />,
            },
            {
                path: '/users/:userId',
                element: <UserInfoPage />,
            },
            {

                path: '/posts',
                element: <PostsPage />
            },
            {

                path: '/posts/:postId',
                element: <PostInfoPage />
            }
        ]
    }
];

export const router = createBrowserRouter(routs);