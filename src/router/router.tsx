import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/main/MainLayout';
import UsersPage from '../pages/users/UsersPage';
import PostsPage from '../pages/posts/PostsPage';
import UserPostsPage from '../pages/user-posts/UserPostsPage';

const routs = [{
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: 'users',
            element: <UsersPage />
        },
        {
            path: 'posts',
            element: <PostsPage />
        },
        {
            path: 'user-posts',
            element: <UserPostsPage />
        }
    ]
}]

export const router = createBrowserRouter(routs)