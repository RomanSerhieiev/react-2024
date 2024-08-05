import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom';
import UsersPage from '../pages/users/UsersPage';
import PostsPage from '../pages/posts/PostsPage';
import MainLayout from '../layouts/main/MainLayout';
import ErrorLayout from '../layouts/error/ErrorLayout';

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

                path: '/posts',
                element: <PostsPage />
            }
        ]
    }
];

export const router = createBrowserRouter(routs);