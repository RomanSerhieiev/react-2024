import { IUser } from '../interfaces/user.interface';
import { IPost } from '../interfaces/post.interface';

export type TStore = {
    userStore: {
        users: IUser[]
    },
    postStore: {
        posts: IPost[]
    }
}