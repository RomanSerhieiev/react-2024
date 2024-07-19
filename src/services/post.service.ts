import { IPost } from '../interfaces/post.interface';
import { IDummy } from '../interfaces/dummy.interface';
import { apiService } from './api.service';
import { urls } from '../constants/urls';

export const postService = {
    getAllOfUser: (userId: number) => apiService.get<IDummy<IPost[]>>(urls.posts.byUserPosts(userId)),
}