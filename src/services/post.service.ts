import { IPost } from '../interfaces/post.interface';
import { IDummy } from '../interfaces/dummy.interface';
import { apiService } from './api.service';
import { urls } from '../constants/urls';

export const postService = {
    getAllOfUser: async (userId: number) => await apiService.get<IDummy<IPost[]>>(urls.posts.byUserPosts(userId)),
}