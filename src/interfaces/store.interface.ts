import { IUser } from './user.interface';
import { IPost } from './post.interface';
import { IAlbum } from './album.interface';
import { IComment } from './comment.interface';
import { IPhoto } from './photo.interface';
import { ITodo } from './todo.interface';

export interface IStore {
    albumSlice: {
        albumsPage: number,
        setAlbumsPage: (albumsPage: number) => void,
        albumsPageSize: number,
        setAlbumsPageSize: (albumsPageSize: number) => void,
        albums: IAlbum[][],
        getAlbums: (albums: IAlbum[]) => void,
        selectedAlbum: number,
        setSelectedAlbum: (selectedAlbum: number) => void,
    },
    commentSlice: {
        commentsPage: number,
        setCommentsPage: (commentsPage: number) => void,
        commentsPageSize: number,
        setCommentsPageSize: (commentsPageSize: number) => void,
        comments: IComment[][],
        getComments: (comments: IComment[]) => void,
        selectedComment: number,
        setSelectedComment: (selectedComment: number) => void,
    },
    photoSlice: {
        photosPage: number,
        setPhotosPage: (photosPage: number) => void,
        photosPageSize: number,
        setPhotosPageSize: (photosPageSize: number) => void,
        photos: IPhoto[][],
        getPhotos: (photos: IPhoto[]) => void,
        selectedPhoto: number,
        setSelectedPhoto: (selectedPhoto: number) => void,
    },
    postSlice: {
        postsPage: number,
        setPostsPage: (postsPage: number) => void,
        postsPageSize: number,
        setPostsPageSize: (postsPageSize: number) => void,
        posts: IPost[][],
        getPosts: (posts: IPost[]) => void,
        selectedPost: number,
        setSelectedPost: (selectedPost: number) => void,
    },
    todoSlice: {
        todosPage: number,
        setTodosPage: (todosPage: number) => void,
        todosPageSize: number,
        setTodosPageSize: (todosPageSize: number) => void,
        todos: ITodo[][],
        getTodos: (todos: ITodo[]) => void,
        selectedTodo: number,
        setSelectedTodo: (selectedTodo: number) => void,
    },
    userSlice: {
        usersPage: number,
        setUsersPage: (usersPage: number) => void,
        usersPageSize: number,
        setUsersPageSize: (pageSize: number) => void,
        users: IUser[][],
        getUsers: (users: IUser[]) => void,
        selectedUser: number,
        setSelectedUser: (selectedUser: number) => void,
    }
}