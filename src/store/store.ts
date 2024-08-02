import { IStore } from '../interfaces/store.interface';
import { create } from 'zustand';
import { IUser } from '../interfaces/user.interface';
import { IPost } from '../interfaces/post.interface';
import { IAlbum } from '../interfaces/album.interface';
import { IComment } from '../interfaces/comment.interface';
import { IPhoto } from '../interfaces/photo.interface';
import { ITodo } from '../interfaces/todo.interface';
import { EKey } from '../enums/local-storage-keys.enum';
import { retrieveOrSaveLocalStorageData } from '../helpers/retrieve-or-save-local-storage-data.helper';

const divideItemsByPageSize = <T>(items: T[], pageSize: number): T[][] => {
    const result: T[][] = [];
    for (let i = 0; i < items.length; i += pageSize) {
        result.push(items.slice(i, i + pageSize));
    }
    return result;
};

export const useStore = create<IStore>(set => ({
    albumSlice: {
        albumsPage: retrieveOrSaveLocalStorageData(EKey.albumsPage, 1),
        setAlbumsPage: (albumsPage: number) => {
            set(state => ({
                albumSlice: {
                    ...state.albumSlice,
                    albumsPage
                }
            }))
        },
        albumsPageSize: retrieveOrSaveLocalStorageData(EKey.albumsPageSize, 25),
        setAlbumsPageSize: (albumsPageSize: number) => {
            set(state => ({
                albumSlice: {
                    ...state.albumSlice,
                    albumsPageSize,
                    albumsPage: 1
                }
            }))
        },
        albums: [],
        getAlbums: (albumsBeforeDivide: IAlbum[]) => {
            const { albumsPageSize } = useStore.getState().albumSlice;
            const albums = divideItemsByPageSize(albumsBeforeDivide, albumsPageSize);
            set(state => ({
                albumSlice: {
                    ...state.albumSlice,
                    albums
                }
            }));
        },
        selectedAlbum: retrieveOrSaveLocalStorageData(EKey.selectedAlbum, 0),
        setSelectedAlbum: (selectedAlbum: number) => {
            set(state => ({
                albumSlice: {
                    ...state.albumSlice,
                    selectedAlbum
                }
            }))
        },
    },
    commentSlice: {
        commentsPage: retrieveOrSaveLocalStorageData(EKey.commentsPage, 1),
        setCommentsPage: (commentsPage: number) => {
            set(state => ({
                commentSlice: {
                    ...state.commentSlice,
                    commentsPage
                }
            }))
        },
        commentsPageSize: retrieveOrSaveLocalStorageData(EKey.commentsPageSize, 25),
        setCommentsPageSize: (commentsPageSize: number) => {
            set(state => ({
                commentSlice: {
                    ...state.commentSlice,
                    commentsPageSize,
                    commentsPage: 1
                }
            }))
        },
        comments: [],
        getComments: (commentsBeforeDivide: IComment[]) => {
            const { commentsPageSize } = useStore.getState().commentSlice;
            const comments = divideItemsByPageSize(commentsBeforeDivide, commentsPageSize);
            set(state => ({
                commentSlice: {
                    ...state.commentSlice,
                    comments
                }
            }));
        },
        selectedComment: retrieveOrSaveLocalStorageData(EKey.selectedComment, 0),
        setSelectedComment: (selectedComment: number) => {
            set(state => ({
                commentSlice: {
                    ...state.commentSlice,
                    selectedComment
                }
            }))
        },
    },
    photoSlice: {
        photosPage: retrieveOrSaveLocalStorageData(EKey.photosPage, 1),
        setPhotosPage: (photosPage: number) => {
            set(state => ({
                photoSlice: {
                    ...state.photoSlice,
                    photosPage
                }
            }))
        },
        photosPageSize: retrieveOrSaveLocalStorageData(EKey.photosPageSize, 25),
        setPhotosPageSize: (photosPageSize: number) => {
            set(state => ({
                photoSlice: {
                    ...state.photoSlice,
                    photosPageSize,
                    photosPage: 1
                }
            }))
        },
        photos: [],
        getPhotos: (photosBeforeDivide: IPhoto[]) => {
            const { photosPageSize } = useStore.getState().photoSlice;
            const photos = divideItemsByPageSize(photosBeforeDivide, photosPageSize);
            set(state => ({
                photoSlice: {
                    ...state.photoSlice,
                    photos
                }
            }));
        },
        selectedPhoto: retrieveOrSaveLocalStorageData(EKey.selectedPhoto, 0),
        setSelectedPhoto: (selectedPhoto: number) => {
            set(state => ({
                photoSlice: {
                    ...state.photoSlice,
                    selectedPhoto
                }
            }))
        },
    },
    postSlice: {
        postsPage: retrieveOrSaveLocalStorageData(EKey.postsPage, 1),
        setPostsPage: (postsPage: number) => {
            set(state => ({
                postSlice: {
                    ...state.postSlice,
                    postsPage
                }
            }))
        },
        postsPageSize: retrieveOrSaveLocalStorageData(EKey.postsPageSize, 25),
        setPostsPageSize: (postsPageSize: number) => {
            set(state => ({
                postSlice: {
                    ...state.postSlice,
                    postsPageSize,
                    postsPage: 1
                }
            }))
        },
        posts: [],
        getPosts: (postsBeforeDivide: IPost[]) => {
            const { postsPageSize } = useStore.getState().postSlice;
            const posts = divideItemsByPageSize(postsBeforeDivide, postsPageSize);
            set(state => ({
                postSlice: {
                    ...state.postSlice,
                    posts
                }
            }));
        },
        selectedPost: retrieveOrSaveLocalStorageData(EKey.selectedPost, 0),
        setSelectedPost: (selectedPost: number) => {
            set(state => ({
                postSlice: {
                    ...state.postSlice,
                    selectedPost
                }
            }))
        },
    },
    todoSlice: {
        todosPage: retrieveOrSaveLocalStorageData(EKey.todosPage, 1),
        setTodosPage: (todosPage: number) => {
            set(state => ({
                todoSlice: {
                    ...state.todoSlice,
                    todosPage
                }
            }))
        },
        todosPageSize: retrieveOrSaveLocalStorageData(EKey.todosPageSize, 25),
        setTodosPageSize: (todosPageSize: number) => {
            set(state => ({
                todoSlice: {
                    ...state.todoSlice,
                    todosPageSize,
                    todosPage: 1
                }
            }))
        },
        todos: [],
        getTodos: (todosBeforeDivide: ITodo[]) => {
            const { todosPageSize } = useStore.getState().todoSlice;
            const todos = divideItemsByPageSize(todosBeforeDivide, todosPageSize);
            set(state => ({
                todoSlice: {
                    ...state.todoSlice,
                    todos
                }
            }));
        },
        selectedTodo: retrieveOrSaveLocalStorageData(EKey.selectedTodo, 0),
        setSelectedTodo: (selectedTodo: number) => {
            set(state => ({
                todoSlice: {
                    ...state.todoSlice,
                    selectedTodo
                }
            }))
        },
    },
    userSlice: {
        usersPage: retrieveOrSaveLocalStorageData(EKey.usersPage, 1),
        setUsersPage: (usersPage: number) => {
            set(state => ({
                userSlice: {
                    ...state.userSlice,
                    usersPage
                }
            }))
        },
        usersPageSize: retrieveOrSaveLocalStorageData(EKey.usersPageSize, 25),
        setUsersPageSize: (usersPageSize: number) => {
            set(state => ({
                userSlice: {
                    ...state.userSlice,
                    usersPageSize,
                    usersPage: 1
                }
            }))
        },
        users: [],
        getUsers: (usersBeforeDivide: IUser[]) => {
            const { usersPageSize } = useStore.getState().userSlice;
            const users = divideItemsByPageSize(usersBeforeDivide, usersPageSize);
            set(state => ({
                userSlice: {
                    ...state.userSlice,
                    users
                }
            }));
        },
        selectedUser: retrieveOrSaveLocalStorageData(EKey.selectedUser, 0),
        setSelectedUser: (selectedUser: number) => {
            set(state => ({
                userSlice: {
                    ...state.userSlice,
                    selectedUser
                }
            }))
        },
    },
}));