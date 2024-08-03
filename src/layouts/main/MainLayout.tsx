import React, { FC, useEffect } from 'react';
import css from './MainLayout.module.css';
import { Outlet } from 'react-router-dom';
import HeaderComponent from '../../components/header/HeaderComponent';
import { useStore } from '../../store/store';
import { userService } from '../../services/user.service';
import { postService } from '../../services/post.service';
import { albumService } from '../../services/album.service';
import { commentService } from '../../services/comment.service';
import { photoService } from '../../services/photo.service';
import { todoService } from '../../services/todo.service';
import { IUser } from '../../interfaces/user.interface';
import { IAlbum } from '../../interfaces/album.interface';
import { IPost } from '../../interfaces/post.interface';
import { ITodo } from '../../interfaces/todo.interface';
import { IPhoto } from '../../interfaces/photo.interface';
import { IComment } from '../../interfaces/comment.interface';

const MainLayout: FC = () => {
    const {
        albumSlice: {albums, albumsPageSize, getAlbums},
        commentSlice: {comments, commentsPageSize, getComments},
        photoSlice: {photos, photosPageSize, getPhotos},
        postSlice: {posts, postsPageSize, getPosts},
        todoSlice: {todos, todosPageSize, getTodos},
        userSlice: {users, usersPageSize, getUsers},
    } = useStore();

    const updateUserRelations = (
        users: IUser[],
        albums: IAlbum[],
        posts: IPost[],
        todos: ITodo[]
    ): IUser[] => {
        return users.map(user => {
            return {
                ...user,
                albumsIds: albums.filter(album => album.userId === user.id).map(album => album.id),
                postsIds: posts.filter(post => post.userId === user.id).map(post => post.id),
                todosIds: todos.filter(todo => todo.userId === user.id).map(todo => todo.id),
            };
        });
    };

    const updateAlbumRelations = (
        albums: IAlbum[],
        photos: IPhoto[]
    ): IAlbum[] => {
        return albums.map(album => {
            return {
                ...album,
                photosIds: photos.filter(photo => photo.albumId === album.id).map(photo => photo.id),
            };
        });
    };

    const updatePostRelations = (
        posts: IPost[],
        comments: IComment[]
    ): IPost[] => {
        return posts.map(post => {
            return {
                ...post,
                commentsIds: comments.filter(comment => comment.postId === post.id).map(comment => comment.id),
            };
        });
    };

    useEffect(() => {
        Promise.all([
            commentService.getAll(),
            todoService.getAll(),
            photoService.getAll(),
            albumService.getAll(),
            postService.getAll(),
            userService.getAll()
        ]).then(([commentsResponse, todosResponse, photosResponse, albumsResponse, postsResponse, usersResponse]) => {
            const updatedUsers = updateUserRelations(usersResponse.data, albumsResponse.data, postsResponse.data, todosResponse.data);
            const updatedAlbums = updateAlbumRelations(albumsResponse.data, photosResponse.data);
            const updatedPosts = updatePostRelations(postsResponse.data, commentsResponse.data);

            getComments(commentsResponse.data);
            getTodos(todosResponse.data);
            getPhotos(photosResponse.data);
            getAlbums(updatedAlbums);
            getPosts(updatedPosts);
            getUsers(updatedUsers);
        });
    }, []);

    useEffect(() => {
        getAlbums(albums.flat());
    }, [albumsPageSize]);

    useEffect(() => {
        getComments(comments.flat());
    }, [commentsPageSize]);

    useEffect(() => {
        getPhotos(photos.flat());
    }, [photosPageSize]);

    useEffect(() => {
        getPosts(posts.flat());
    }, [postsPageSize]);

    useEffect(() => {
        getTodos(todos.flat());
    }, [todosPageSize]);

    useEffect(() => {
        getUsers(users.flat());
    }, [usersPageSize]);

    return (
        <div className={css.Container}>
            <HeaderComponent />
            <Outlet />
        </div>
    );
};

export default MainLayout;