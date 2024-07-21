import { createBrowserRouter, RouteObject } from 'react-router-dom';
import MainLayout from '../layouts/main/MainLayout';
import ErrorLayout from '../layouts/error/ErrorLayout';
import UsersPage from '../pages/users/UsersPage';
import UserPage from '../pages/user/UserPage';
import AlbumsPage from '../pages/albums/AlbumsPage';
import TodosPage from '../pages/todos/TodosPage';
import PostsPage from '../pages/posts/PostsPage';
import PostPage from '../pages/post/PostPage';
import CommentsPage from '../pages/comments/CommentsPage';
import CommentPage from '../pages/comment/CommentPage';
import AlbumPage from '../pages/album/AlbumPage';
import PhotosPage from '../pages/photos/PhotosPage';
import PhotoPage from '../pages/photo/PhotoPage';
import TodoPage from '../pages/todo/TodoPage';

const routs: RouteObject[] = [
    {
        path: '',
        element: <MainLayout />,
        errorElement: <ErrorLayout />,
        children: [
            {
                element: <UsersPage />,
                index: true,
            },
            {
                path: 'users',
                element: <UsersPage />
            },
            {
                path: 'users/:id',
                element: <UserPage />
            },
            {
                path: 'users/:id/albums',
                element: <AlbumsPage />
            },
            {
                path: 'users/:id/todos',
                element: <TodosPage />
            },
            {
                path: 'users/:id/posts',
                element: <PostsPage />
            },
            {
                path: 'posts',
                element: <PostsPage />
            },
            {
                path: 'posts/:id',
                element: <PostPage />
            },
            {
                path: 'posts/:id/comments',
                element: <CommentsPage />
            },
            {
                path: 'comments',
                element: <CommentsPage />
            },
            {
                path: 'comments/:id',
                element: <CommentPage />
            },
            {
                path: 'albums',
                element: <AlbumsPage />
            },
            {
                path: 'albums/:id',
                element: <AlbumPage />
            },
            {
                path: 'albums/:id/photos',
                element: <PhotosPage />
            },
            {
                path: 'photos',
                element: <PhotosPage />
            },
            {
                path: 'photos/:id',
                element: <PhotoPage />
            },
            {
                path: 'todos',
                element: <TodosPage />
            },
            {
                path: 'todos/:id',
                element: <TodoPage />
            }
        ]
    }
];

export const router = createBrowserRouter(routs);