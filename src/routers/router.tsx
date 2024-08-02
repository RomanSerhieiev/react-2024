import { createBrowserRouter, RouteObject } from 'react-router-dom';
import App from '../App';
import UsersPage from '../pages/users/UsersPage';
import PostsPage from '../pages/posts/PostsPage';

const routs: RouteObject[] = [
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/users',
                element: <UsersPage />
            },
            {

                path: '/posts',
                element: <PostsPage />
            }
        ]
    }
]

export const router = createBrowserRouter(routs)