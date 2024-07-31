import { IUser } from '../interfaces/user.interface';
import { IPost } from '../interfaces/post.interface';

export type TStore = {
    userSlice: {
        users: IUser[],
        selectedUser: IUser | null,
        selectUser: (user: IUser) => void,
        loadUsers: (users: IUser[]) => void,
    },
    postSlice: {
        posts: IPost[],
        selectedPost: IPost | null,
        selectPost: (post: IPost) => void,
        loadPosts: (posts: IPost[]) => void,
    }
}