import { createBrowserRouter, RouteObject } from 'react-router-dom';
import MainLayout from '../layouts/main/MainLayout';
import UsersPage from '../pages/users/users/UsersPage';
import PostsPage from '../pages/posts/posts/PostsPage';
import ErrorLayout from '../layouts/error/ErrorLayout';
import AlbumsPage from '../pages/albums/albums/AlbumsPage';
import AlbumInfoPage from '../pages/albums/album-info/AlbumInfoPage';
import CommentsPage from '../pages/comments/comments/CommentsPage';
import CommentInfoPage from '../pages/comments/comment-info/CommentInfoPage';
import PostInfoPage from '../pages/posts/post-info/PostInfoPage';
import UserInfoPage from '../pages/users/user-info/UserInfoPage';
import PhotosPage from '../pages/photos/photos/PhotosPage';
import PhotoInfoPage from '../pages/photos/photo-info/PhotoInfoPage';
import TodosPage from '../pages/todos/todos/TodosPage';
import TodoInfoPage from '../pages/todos/todo-info/TodoInfoPage';

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
                path: 'users/:userId',
                element: <UserInfoPage />
            },
            {
                path: 'posts',
                element: <PostsPage />
            },
            {
                path: 'posts/:postId',
                element: <PostInfoPage />
            },
            {
                path: 'comments',
                element: <CommentsPage />
            },
            {
                path: 'comments/:commentId',
                element: <CommentInfoPage />
            },
            {
                path: 'albums',
                element: <AlbumsPage />
            },
            {
                path: 'albums/:albumId',
                element: <AlbumInfoPage />
            },
            {
                path: 'photos',
                element: <PhotosPage />
            },
            {
                path: 'photos/:photoId',
                element: <PhotoInfoPage />
            },
            {
                path: 'todos',
                element: <TodosPage />
            },
            {
                path: 'todos/:todoId',
                element: <TodoInfoPage />
            }
        ]
    }
];

export const router = createBrowserRouter(routs)