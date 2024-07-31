import { IUser } from '../interfaces/user.interface';
import { IPost } from '../interfaces/post.interface';

export type TUserPosts = IUser & {posts: IPost[]};