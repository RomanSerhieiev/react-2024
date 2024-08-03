import { IStore } from '../interfaces/store.interface';
import { createContext } from 'react';
import { EKey } from '../enums/local-storage-keys.enum';
import { retrieveOrSaveLocalStorageData } from '../helpers/retrieve-or-save-local-storage-data.helper';

const defaultStore: IStore = {
    albumSlice: {
        albumsPage: retrieveOrSaveLocalStorageData(EKey.albumsPage, 1),
        setAlbumsPage: () => {
        },
        albumsPageSize: retrieveOrSaveLocalStorageData(EKey.albumsPageSize, 25),
        setAlbumsPageSize: () => {
        },
        albums: [],
        selectedAlbum: retrieveOrSaveLocalStorageData(EKey.selectedAlbum, 0),
        setSelectedAlbum: () => {
        },
    },
    commentSlice: {
        commentsPage: retrieveOrSaveLocalStorageData(EKey.commentsPage, 1),
        setCommentsPage: () => {
        },
        commentsPageSize: retrieveOrSaveLocalStorageData(EKey.commentsPageSize, 25),
        setCommentsPageSize: () => {
        },
        comments: [],
        selectedComment: retrieveOrSaveLocalStorageData(EKey.selectedComment, 0),
        setSelectedComment: () => {
        },
    },
    photoSlice: {
        photosPage: retrieveOrSaveLocalStorageData(EKey.photosPage, 1),
        setPhotosPage: () => {
        },
        photosPageSize: retrieveOrSaveLocalStorageData(EKey.photosPageSize, 25),
        setPhotosPageSize: () => {
        },
        photos: [],
        selectedPhoto: retrieveOrSaveLocalStorageData(EKey.selectedPhoto, 0),
        setSelectedPhoto: () => {
        },
    },
    postSlice: {
        postsPage: retrieveOrSaveLocalStorageData(EKey.postsPage, 1),
        setPostsPage: () => {
        },
        postsPageSize: retrieveOrSaveLocalStorageData(EKey.postsPageSize, 25),
        setPostsPageSize: () => {
        },
        posts: [],
        selectedPost: retrieveOrSaveLocalStorageData(EKey.selectedPost, 0),
        setSelectedPost: () => {
        },
    },
    todoSlice: {
        todosPage: retrieveOrSaveLocalStorageData(EKey.todosPage, 1),
        setTodosPage: () => {
        },
        todosPageSize: retrieveOrSaveLocalStorageData(EKey.todosPageSize, 25),
        setTodosPageSize: () => {
        },
        todos: [],
        selectedTodo: retrieveOrSaveLocalStorageData(EKey.selectedTodo, 0),
        setSelectedTodo: () => {
        },
    },
    userSlice: {
        usersPage: retrieveOrSaveLocalStorageData(EKey.usersPage, 1),
        setUsersPage: () => {
        },
        usersPageSize: retrieveOrSaveLocalStorageData(EKey.usersPageSize, 25),
        setUsersPageSize: () => {
        },
        users: [],
        selectedUser: retrieveOrSaveLocalStorageData(EKey.selectedUser, 0),
        setSelectedUser: () => {
        },
    },
};

export const Store = createContext<IStore>(defaultStore);