import React, { FC, useEffect, useState } from 'react';
import css from './MainLayout.module.css';
import { Outlet } from 'react-router-dom';
import HeaderComponent from '../../components/header/HeaderComponent';
import { Store } from '../../store/store';
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
import { retrieveOrSaveLocalStorageData } from '../../helpers/retrieve-or-save-local-storage-data.helper';
import { EKey } from '../../enums/local-storage-keys.enum';

const MainLayout: FC = () => {
    const [albums, setAlbums] = useState<IAlbum[][]>([]);
    const [albumsPage, setAlbumsPage] = useState<number>(retrieveOrSaveLocalStorageData(EKey.albumsPage, 1));
    const [albumsPageSize, changeAlbumsPageSize] = useState<number>(retrieveOrSaveLocalStorageData(EKey.albumsPageSize, 25));
    const [selectedAlbum, setSelectedAlbum] = useState<number>(retrieveOrSaveLocalStorageData(EKey.selectedAlbum, 0));

    const [comments, setComments] = useState<IComment[][]>([]);
    const [commentsPage, setCommentsPage] = useState<number>(retrieveOrSaveLocalStorageData(EKey.commentsPage, 1));
    const [commentsPageSize, changeCommentsPageSize] = useState<number>(retrieveOrSaveLocalStorageData(EKey.commentsPageSize, 25));
    const [selectedComment, setSelectedComment] = useState<number>(retrieveOrSaveLocalStorageData(EKey.selectedComment, 0));

    const [photos, setPhotos] = useState<IPhoto[][]>([]);
    const [photosPage, setPhotosPage] = useState<number>(retrieveOrSaveLocalStorageData(EKey.photosPage, 1));
    const [photosPageSize, changePhotosPageSize] = useState(retrieveOrSaveLocalStorageData(EKey.photosPageSize, 25));
    const [selectedPhoto, setSelectedPhoto] = useState<number>(retrieveOrSaveLocalStorageData(EKey.selectedPhoto, 0));

    const [posts, setPosts] = useState<IPost[][]>([]);
    const [postsPage, setPostsPage] = useState<number>(retrieveOrSaveLocalStorageData(EKey.postsPage, 1));
    const [postsPageSize, changePostsPageSize] = useState<number>(retrieveOrSaveLocalStorageData(EKey.postsPageSize, 25));
    const [selectedPost, setSelectedPost] = useState<number>(retrieveOrSaveLocalStorageData(EKey.selectedPost, 0));

    const [todos, setTodos] = useState<ITodo[][]>([]);
    const [todosPage, setTodosPage] = useState<number>(retrieveOrSaveLocalStorageData(EKey.todosPage, 1));
    const [todosPageSize, changeTodosPageSize] = useState<number>(retrieveOrSaveLocalStorageData(EKey.todosPageSize, 25));
    const [selectedTodo, setSelectedTodo] = useState<number>(retrieveOrSaveLocalStorageData(EKey.selectedTodo, 0));

    const [users, setUsers] = useState<IUser[][]>([]);
    const [usersPage, setUsersPage] = useState<number>(retrieveOrSaveLocalStorageData(EKey.usersPage, 1));
    const [usersPageSize, changeUsersPageSize] = useState<number>(retrieveOrSaveLocalStorageData(EKey.usersPageSize, 25));
    const [selectedUser, setSelectedUser] = useState<number>(retrieveOrSaveLocalStorageData(EKey.selectedUser, 0));

    const divideItemsByPageSize = <T, >(items: T[], pageSize: number): T[][] => {
        const result: T[][] = [];

        for (let i = 0; i < items.length; i += pageSize) {
            result.push(items.slice(i, i + pageSize));
        }

        return result;
    };

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
            albumService.getAll(),
            commentService.getAll(),
            photoService.getAll(),
            postService.getAll(),
            todoService.getAll(),
            userService.getAll()
        ]).then(([
                     {data: albumsResponse},
                     {data: commentsResponse},
                     {data: photosResponse},
                     {data: postsResponse},
                     {data: todosResponse},
                     {data: usersResponse},
                 ]) => {
            const updatedUsers = updateUserRelations(usersResponse, albumsResponse, postsResponse, todosResponse);
            const updatedAlbums = updateAlbumRelations(albumsResponse, photosResponse);
            const updatedPosts = updatePostRelations(postsResponse, commentsResponse);

            setAlbums(divideItemsByPageSize(updatedAlbums, albumsPageSize));
            setComments(divideItemsByPageSize(commentsResponse, commentsPageSize));
            setPhotos(divideItemsByPageSize(photosResponse, photosPageSize));
            setPosts(divideItemsByPageSize(updatedPosts, postsPageSize));
            setTodos(divideItemsByPageSize(todosResponse, todosPageSize));
            setUsers(divideItemsByPageSize(updatedUsers, usersPageSize));
        });
    }, []);

    useEffect(() => {
        setAlbums(divideItemsByPageSize(albums.flat(), albumsPageSize));
    }, [albumsPageSize]);

    useEffect(() => {
        setComments(divideItemsByPageSize(comments.flat(), commentsPageSize));
    }, [commentsPageSize]);

    useEffect(() => {
        setPhotos(divideItemsByPageSize(photos.flat(), photosPageSize));
    }, [photosPageSize]);

    useEffect(() => {
        setPosts(divideItemsByPageSize(posts.flat(), postsPageSize));
    }, [postsPageSize]);

    useEffect(() => {
        setTodos(divideItemsByPageSize(todos.flat(), todosPageSize));
    }, [todosPageSize]);

    useEffect(() => {
        setUsers(divideItemsByPageSize(users.flat(), usersPageSize));
    }, [usersPageSize]);

    const setAlbumsPageSize = (pageSize: number) => {
        setAlbumsPage(1)
        changeAlbumsPageSize(pageSize)
    }

    const setCommentsPageSize = (pageSize: number) => {
        setCommentsPage(1)
        changeCommentsPageSize(pageSize)
    }

    const setPhotosPageSize = (pageSize: number) => {
        setPhotosPage(1)
        changePhotosPageSize(pageSize)
    }

    const setPostsPageSize = (pageSize: number) => {
        setPostsPage(1)
        changePostsPageSize(pageSize)
    }

    const setTodosPageSize = (pageSize: number) => {
        setTodosPage(1)
        changeTodosPageSize(pageSize)
    }

    const setUsersPageSize = (pageSize: number) => {
        setUsersPage(1)
        changeUsersPageSize(pageSize)
    }

    return (
        <Store.Provider value={
            {
                albumSlice: {
                    albumsPage,
                    setAlbumsPage,
                    albumsPageSize,
                    setAlbumsPageSize,
                    albums,
                    selectedAlbum,
                    setSelectedAlbum,
                },
                commentSlice: {
                    commentsPage,
                    setCommentsPage,
                    commentsPageSize,
                    setCommentsPageSize,
                    comments,
                    selectedComment,
                    setSelectedComment,
                },
                photoSlice: {
                    photosPage,
                    setPhotosPage,
                    photosPageSize,
                    setPhotosPageSize,
                    photos,
                    selectedPhoto,
                    setSelectedPhoto,
                },
                postSlice: {
                    postsPage,
                    setPostsPage,
                    postsPageSize,
                    setPostsPageSize,
                    posts,
                    selectedPost,
                    setSelectedPost,
                },
                todoSlice: {
                    todosPage,
                    setTodosPage,
                    todosPageSize,
                    setTodosPageSize,
                    todos,
                    selectedTodo,
                    setSelectedTodo,
                },
                userSlice: {
                    usersPage,
                    setUsersPage,
                    usersPageSize,
                    setUsersPageSize,
                    users,
                    selectedUser,
                    setSelectedUser,
                },
            }
        }>
            <div className={css.Container}>
                <HeaderComponent />
                <Outlet />
            </div>
        </Store.Provider>
    );
};

export default MainLayout;