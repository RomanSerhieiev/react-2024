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
                path: 'users/:userId/albums',
                element: <AlbumsPage />
            },
            {
                path: 'users/:userId/albums/:albumId',
                element: <AlbumInfoPage />
            },
            {
                path: 'users/:userId/albums/:albumId/photos',
                element: <PhotosPage />
            },
            {
                path: 'users/:userId/albums/:albumId/photos/:photoId',
                element: <PhotoInfoPage />
            },
            {
                path: 'users/:userId/todos',
                element: <TodosPage />
            },
            {
                path: 'users/:userId/todos/:todoId',
                element: <TodoInfoPage />
            },
            {
                path: 'users/:userId/posts',
                element: <PostsPage />
            },
            {
                path: 'users/:userId/posts/:postId',
                element: <PostInfoPage />
            },
            {
                path: 'users/:userId/posts/:postId/comments',
                element: <CommentsPage />
            },
            {
                path: 'users/:userId/posts/:postId/comments/:commentId',
                element: <CommentInfoPage />
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
                path: 'posts/:postId/comments',
                element: <CommentsPage />
            },
            {
                path: 'posts/:postId/comments/:commentId',
                element: <CommentInfoPage />
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
                path: 'albums/:albumId/photos',
                element: <PhotosPage />
            },
            {
                path: 'albums/:albumId/photos/:photoId',
                element: <PhotoInfoPage />
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

export const router = createBrowserRouter(routs);